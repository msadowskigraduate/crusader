export const metadata = {
  title: 'Crusader',
  description: 'There is only war.',
};

export default function CrusaderOrderBuilder({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center bg-gray-900 m-10 p-8 opacity-90 rounded-xl gap-y-10 h-screen">
      {children}
    </div>
  );
}
