import { useMemo, useState, useEffect } from "react";
import DataGrid, { SortColumn, SortIconProps } from "react-data-grid";

const SortIcon = ({ sortDirection }: SortIconProps) => {
  return sortDirection !== undefined ? <>{sortDirection === "ASC" ? "\u2B9D" : "\u2B9F"} </> : null;
};

const rowKeyGetter = (row: Row) => row.id;

const getComparator = (sortColumn: string): ((a: Row, b: Row) => number) => {
  switch (sortColumn) {
    case "name":
    case "email":
    case "phoneNumber":
      return (a, b) => {
        return a[sortColumn].localeCompare(b[sortColumn]);
      };
    case "id":
      return (a, b) => {
        return a[sortColumn] - b[sortColumn];
      };
    default:
      throw new Error(`unsupported sortColumn: "${sortColumn}"`);
  }
};

export const Table = ({ endpoint, columns }) => {
  const [rows, setRows] = useState([]);
  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
  const [selectedRows, setSelectedRows] = useState<ReadonlySet<number>>(() => new Set());

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => setRows(res));
  }, []);

  const sortedRows = useMemo((): readonly Row[] => {
    if (sortColumns.length === 0) return rows;

    return [...rows].sort((a, b) => {
      for (const sort of sortColumns) {
        const comparator = getComparator(sort.columnKey);
        const compResult = comparator(a, b);
        if (compResult !== 0) {
          return sort.direction === "ASC" ? compResult : -compResult;
        }
      }
      return 0;
    });
  }, [rows, sortColumns]);

  return (
    <>
      <DataGrid
        className=""
        columns={columns}
        rows={sortedRows}
        rowKeyGetter={rowKeyGetter}
        onRowsChange={setRows}
        sortColumns={sortColumns}
        onSortColumnsChange={setSortColumns}
        selectedRows={selectedRows}
        onSelectedRowsChange={setSelectedRows}
        components={{ sortIcon: SortIcon }}
        direction={"rtl"}
      />

      <button onClick={() => setRows(rows.filter((row) => row.email.includes("gmail")))}>
        Click
      </button>
    </>
  );
};
