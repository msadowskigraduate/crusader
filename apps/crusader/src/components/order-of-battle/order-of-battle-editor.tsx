'use client';
import { Unit } from '@/app/lib/definitions';
export default function OrderOfBattleBuilder({
  selectedUnits,
}: {
  selectedUnits: Unit[];
}) {
  return (
    <div className="mt-4 ">
      <h2 className="font-bold">Clicked Units:</h2>
      <ul>
        {selectedUnits.map((u, idx) => (
          <li key={idx}>{u.name}</li> // idx ensures duplicates are tracked
        ))}
      </ul>
    </div>
  );
}
