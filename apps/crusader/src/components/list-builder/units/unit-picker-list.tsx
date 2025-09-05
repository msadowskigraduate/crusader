'use client';

import { useState, useEffect } from 'react';
import { ScrollShadow } from '@heroui/scroll-shadow';
import { Listbox, ListboxItem, ListboxSection } from '@heroui/listbox';
import { Avatar } from '@heroui/avatar';
import { Input } from '@heroui/input';
import { Unit } from '@/app/lib/definitions';
import { Button } from '@heroui/react';

export const PreviewIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6  align-baseline"
    >
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path
        fillRule="evenodd"
        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const PreviewButton = ({ unit }: { unit: Unit }) => {
  return (
    <Button
      isIconOnly
      aria-label="Preview Unit"
      variant="light"
      color="primary"
      onPress={(e) => {
        console.log(unit.id);
      }}
    >
      <PreviewIcon />
    </Button>
  );
};

export default function FactionUnits({
  factionId,
  onUnitClick,
}: {
  factionId: string;
  onUnitClick: (unit: Unit) => void;
}) {
  const units = useData(`/api/factions/${factionId}`);
  const [search, setSearch] = useState('');
  const grouped = groupByRole(units, search);

  function groupByRole(
    units: Unit[] | null,
    search: string
  ): Record<string, Unit[]> {
    if (!units) return {};
    return units.reduce((groups, unit) => {
      if (search && !unit.name.toLowerCase().includes(search.toLowerCase()))
        return groups;
      if (!groups[unit.role]) {
        groups[unit.role] = [];
      }
      groups[unit.role].push(unit);
      return groups;
    }, {} as Record<string, Unit[]>);
  }

  function useData(url: string) {
    const [data, setData] = useState<Unit[] | null>(null);
    useEffect(() => {
      let ignore = false;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (!ignore) setData(json);
        });
      return () => {
        ignore = true;
      };
    }, [url]);

    return data;
  }

  return (
    <div className="flex flex-col h-[85vh]">
      <div className="p-4">
        <Input
          placeholder="Search units..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />
      </div>
      <ScrollShadow hideScrollBar className="flex-1 p-4 space-y-8">
        <Listbox
          className="gap-2"
          selectionMode="none"
          variant="bordered"
          selectionBehavior="replace"
          label={factionId}
        >
          {Object.entries(grouped).map(([role, units]) => (
            <ListboxSection title={role} showDivider>
              {units.map((unit) => (
                <ListboxItem
                  key={unit.id}
                  textValue={unit.name}
                  onClick={() => onUnitClick(unit)}
                  endContent={<PreviewButton unit={unit} />}
                  startContent={<Avatar name={unit.name} size="sm" />}
                >
                  <div className="flex gap-3 items-center">
                    <span className="text-yellow-100">{unit.name}</span>
                  </div>
                </ListboxItem>
              ))}
            </ListboxSection>
          ))}
        </Listbox>
      </ScrollShadow>
    </div>
  );
}
