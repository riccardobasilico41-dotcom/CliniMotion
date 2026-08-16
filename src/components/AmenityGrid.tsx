import {
  Wifi,
  Mountain,
  UtensilsCrossed,
  WashingMachine,
  Tv,
  Baby,
  ParkingCircle,
  DoorOpen,
  PawPrint,
  Volume1,
  Sofa,
  type LucideIcon,
} from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const iconMap: Record<string, LucideIcon> = {
  wifi: Wifi,
  ski: Mountain,
  mountain: Mountain,
  balcony: Sofa,
  kitchen: UtensilsCrossed,
  appliances: WashingMachine,
  tv: Tv,
  crib: Baby,
  parking: ParkingCircle,
  door: DoorOpen,
  pet: PawPrint,
  calm: Volume1,
}

export function AmenityGrid() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {siteConfig.amenities.map((amenity) => {
        const Icon = iconMap[amenity.icon] ?? Mountain
        return (
          <li
            key={amenity.label}
            className="flex items-center gap-3 rounded-2xl border border-forest/10 bg-white/60 px-4 py-3.5"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
              <Icon size={18} strokeWidth={1.75} />
            </span>
            <span className="text-sm text-stone">{amenity.label}</span>
          </li>
        )
      })}
    </ul>
  )
}
