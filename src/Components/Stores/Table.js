import React from "react";
import {
  FaturamentoMin,
  StoresTable,
  TableBody,
  TableHeader,
} from "./Table.styled";

const Table = ({ faturamentoMinFilter, data }) => {
  return (
    <StoresTable>
      <TableHeader>
        <tr>
          <th>Loja</th>
          <th>FaturamentoMin</th>
        </tr>
      </TableHeader>
      <TableBody>
        {data?.map(({ name, revenue }) => (
          <tr key={name}>
            <td>{name}</td>
            <FaturamentoMin faturamentoMin={faturamentoMinFilter} revenue={revenue}>
              R$ {revenue}
            </FaturamentoMin>
          </tr>
        ))}
      </TableBody>
    </StoresTable>
  );
};

export default Table;
