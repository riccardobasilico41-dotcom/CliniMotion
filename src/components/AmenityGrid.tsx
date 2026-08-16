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
    <ul className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10">
      {siteConfig.amenities.map((amenity, i) => {
        const Icon = iconMap[amenity.icon] ?? Mountain
        return (
          <li
            key={amenity.label}
            className="flex items-center gap-3.5 border-t border-forest/10 py-4 first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
          >
            <Icon size={17} strokeWidth={1.5} className="shrink-0 text-wood-dark" />
            <span className="text-sm text-stone">{amenity.label}</span>
            <span className="ml-auto font-mono text-[0.65rem] text-stone/40">
              {String(i + 1).padStart(2, '0')}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
