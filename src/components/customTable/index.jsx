import { RiFlag2Line } from '@remixicon/react';
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';



export default function CustomTable({ data, headers, fields, title }) {
  return (
    <Card className="flex flex-col items-stretch">
      <div>
        <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{title}</h3>
      </div>
      <Table className="mt-5 overflow-auto">
        <TableHead className="sticky top-0 bg-[#ffffffe6] border-2 border-transparent border-b-indigo-200">
          <TableRow>
            {headers.map((header) => (
              <TableHeaderCell key={header}>{header}</TableHeaderCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item[fields[0]]}>
              {fields.map((field) => (
                <TableCell key={`${item}-${field}`}>{item[field]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>


  )
}