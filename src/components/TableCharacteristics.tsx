import { Table } from '@radix-ui/themes';

export const TableCharacteristics: React.FC = () => {
  return (
    <div className="table-characteristics">
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell className="subtitle table-header-cell">
              Characteristics:
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row className="table-row">
            <Table.Cell className="table-cell">Brand </Table.Cell>
            <Table.Cell className="table-cell">Google</Table.Cell>
          </Table.Row>

          <Table.Row className="table-row">
            <Table.Cell className="table-cell">Series</Table.Cell>
            <Table.Cell className="table-cell">Google Pixel 9</Table.Cell>
          </Table.Row>

          <Table.Row className="table-row">
            <Table.Cell className="table-cell">Screen type</Table.Cell>
            <Table.Cell className="table-cell">OLED</Table.Cell>
          </Table.Row>

          <Table.Row className="table-row">
            <Table.Cell className="table-cell">Screen diagonal</Table.Cell>
            <Table.Cell className="table-cell">6.3''</Table.Cell>
          </Table.Row>
          <Table.Row className="table-row">
            <Table.Cell className="table-cell">Screen resolution</Table.Cell>
            <Table.Cell className="table-cell">2424x1080</Table.Cell>
          </Table.Row>
          <Table.Row className="table-row">
            <Table.Cell className="table-cell">Screen refresh rate</Table.Cell>
            <Table.Cell className="table-cell">120 Hz</Table.Cell>
          </Table.Row>
          <Table.Row className="table-row">
            <Table.Cell className="table-cell">Processor</Table.Cell>
            <Table.Cell className="table-cell">Google Tensor G4</Table.Cell>
          </Table.Row>
          <Table.Row className="table-row">
            <Table.Cell className="table-cell">Number of cores</Table.Cell>
            <Table.Cell className="table-cell">8</Table.Cell>
          </Table.Row>
          <Table.Row className="table-row">
            <Table.Cell className="table-cell">Graphics chip</Table.Cell>
            <Table.Cell className="table-cell">Mali-G715</Table.Cell>
          </Table.Row>
          <Table.Row className="table-row">
            <Table.Cell className="table-cell">RAM</Table.Cell>
            <Table.Cell className="table-cell">RAM 12GB</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  );
};
