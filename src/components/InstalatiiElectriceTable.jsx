import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { instalatiiElectriceData } from "./table-data";

const InstalatiiElectriceTable = () => {
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold text-xl">
            INSTALATII ELECTRICE{" "}
          </TableHead>
        </TableRow>
        <TableRow>
          <TableHead className="w-full">Activitatea</TableHead>
          <TableHead>Masura</TableHead>
          <TableHead className="text-center">Lei</TableHead>
        </TableRow>
      </TableHeader>{" "}
      <TableBody>
        {instalatiiElectriceData.map((service, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium flex flex-grow">
              {service.name}
            </TableCell>
            <TableCell className="text-end">{service.measure}</TableCell>
            <TableCell className="whitespace-nowrap text-end">
              {service.price}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
};

export default InstalatiiElectriceTable;
