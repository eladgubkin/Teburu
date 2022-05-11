import { Table } from "./Table";
import { TextEditor, Column } from "react-data-grid";

interface Row {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

const columns: readonly Column<Row>[] = [
  {
    key: "id",
    name: "Id",
    width: 80,
    resizable: true,
    sortable: true,
  },
  {
    key: "name",
    name: "שם מלא",
    editor: TextEditor,
    sortable: true,
    resizable: true,
  },
  {
    key: "email",
    name: "אימייל",
    editor: TextEditor,
    sortable: true,
    resizable: true,
  },
  {
    key: "phoneNumber",
    name: "מס' טלפן",
    editor: TextEditor,
    sortable: true,
    resizable: true,
  },
];

export const Customers = () => {
  return (
    <>
      <div style={{ height: "100%" }}>
        <Table endpoint="/customers" columns={columns} />
      </div>
    </>
  );
};
