import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { CervicalTest } from '@/components/CervicalTest'
import { Login } from '@/components/Login'

function App() {
  const [checking, setChecking] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setLoggedIn(!!data.session)
      setChecking(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setLoggedIn(!!session)
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  if (checking) {
    return <div className="min-h-screen bg-cm-bg" />
  }

  return (
    <div className="min-h-screen bg-cm-bg">
      {loggedIn ? <CervicalTest /> : <Login onLoggedIn={() => setLoggedIn(true)} />}
    </div>
  )
}

export default App
