import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

interface Props {
  onLoggedIn: () => void
}

export function Login({ onLoggedIn }: Props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    setError(null)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (error) {
      setError(error.message)
      return
    }
    onLoggedIn()
  }

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-cm-panel border border-cm-panelBorder rounded space-y-3">
      <h1 className="text-xl font-semibold text-cm-brass cm-mono tracking-tight">CliniMotion — Accesso</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full px-3 py-2 rounded bg-cm-bg border border-cm-text/20 text-cm-text"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full px-3 py-2 rounded bg-cm-bg border border-cm-text/20 text-cm-text"
        onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
      />
      {error && <p className="text-xs text-cm-warn">{error}</p>}
      <button
        disabled={loading || !email || !password}
        onClick={handleLogin}
        className="w-full px-4 py-2 rounded bg-cm-brass text-cm-bg font-medium disabled:opacity-40"
      >
        {loading ? 'Accesso in corso...' : 'Accedi'}
      </button>
    </div>
  )
}
