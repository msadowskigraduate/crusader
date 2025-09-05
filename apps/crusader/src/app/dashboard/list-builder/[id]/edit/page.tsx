'use client';
import { Unit } from '@/app/lib/definitions';
import UnitPicker from '@/components/list-builder/units/unit-picker-list';
import OrderOfBattleBuilder from '@/components/order-of-battle/order-of-battle-editor';
import { use, useState } from 'react';

export default function EditListBuilderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [clickedUnits, setClickedUnits] = useState<Unit[]>([]);

  const handleUnitClick = (unit: Unit) => {
    setClickedUnits((prev) => [...prev, unit]); // ✅ keeps duplicates
  };

  return (
    <div className="place-self-start">
      <p className="text-5xl mb-4 font-manufacturing">Edit Order of Battle</p>

      <div className="flex flex-row">
        <UnitPicker factionId="AC" onUnitClick={handleUnitClick} />
        <OrderOfBattleBuilder selectedUnits={clickedUnits} />
      </div>
    </div>
  );
}
