import React from 'react';

interface Table {
  id: number;
  seats: number;
  isAvailable: boolean;
  position: { x: number; y: number };
}

interface TableSelectorProps {
  selectedTable: number | null;
  onSelectTable: (tableId: number) => void;
  date: string;
  time: string;
}

const TableSelector: React.FC<TableSelectorProps> = ({
  selectedTable,
  onSelectTable,
  date,
  time,
}) => {
  // Mock table data - in a real app, this would come from your backend
  const tables: Table[] = [
    { id: 1, seats: 2, isAvailable: true, position: { x: 20, y: 20 } },
    { id: 2, seats: 4, isAvailable: true, position: { x: 120, y: 20 } },
    { id: 3, seats: 6, isAvailable: true, position: { x: 220, y: 20 } },
    { id: 4, seats: 2, isAvailable: true, position: { x: 20, y: 120 } },
    { id: 5, seats: 4, isAvailable: false, position: { x: 120, y: 120 } },
    { id: 6, seats: 8, isAvailable: true, position: { x: 220, y: 120 } },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h3 className="text-lg font-medium mb-4">Select Your Table</h3>
      <div className="relative w-full h-[300px] border-2 border-gray-200 rounded-lg p-4 mb-6">
        {/* Restaurant Layout */}
        <div className="absolute top-2 left-2 right-2 bottom-2">
          {tables.map((table) => (
            <div
              key={table.id}
              onClick={() => table.isAvailable && onSelectTable(table.id)}
              style={{
                left: `${table.position.x}px`,
                top: `${table.position.y}px`,
              }}
              className={`absolute w-16 h-16 rounded-full flex items-center justify-center cursor-pointer
                ${
                  !table.isAvailable
                    ? 'bg-gray-200 cursor-not-allowed'
                    : selectedTable === table.id
                    ? 'bg-stone-800 text-white'
                    : 'bg-stone-100 hover:bg-stone-200'
                }`}
            >
              <div className="text-center">
                <div className="text-sm font-medium">T{table.id}</div>
                <div className="text-xs">{table.seats}p</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center text-sm text-gray-500">
        <div className="flex justify-center space-x-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-stone-100 rounded-full mr-2"></div>
            Available
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-stone-800 rounded-full mr-2"></div>
            Selected
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-200 rounded-full mr-2"></div>
            Unavailable
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableSelector;