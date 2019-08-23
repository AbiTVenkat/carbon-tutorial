import React from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableExpandRow,
  TableCell,
  TableExpandedRow,
} from 'carbon-components-react';

function dueDateColor(rowID, cellID, date, comment) {
  var cellName = rowID + ':calDueDate';
  if (cellID === cellName) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    const date1 = new Date(today);
    const date2 = new Date(date);
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    //console.log('Today: ' + date1);
    //console.log('DueDate: ' + date2);
    //console.log(diffDays);
    if (diffDays > 30 && date2 > date1) {
      return '#6cde64'; // green: Calibration on time
    } else if (diffDays >= 0 && diffDays <= 30 && date2 > date1) {
      return '#fad169'; // orange: Calibration within 30 days
    } else if (date2 < date1) {
      return '#f74525'; // red: Calibration needs to be done
    }
  }
}
function outForCalFont(rowID, cellID, comment) {
  var cellName = rowID + ':comments';
  if (cellID === cellName) {
    if (comment.includes('Out for calibration')) {
      return '#f74525';
    }
  }
}

const EquipmentTable = ({ rows, headers }) => {
  const getMeasurements = rowId => {
    const row = rows.find(({ id }) => id === rowId);
    var measurementArray = [];
    measurementArray[0] = row.measType;
    measurementArray[1] = row.range;
    measurementArray[2] = row.accuracy;
    return measurementArray;
  };

  /*     const ConsoleLog = ({ children }) => {
        console.log(children);
        return false;
      }; */

  return (
    <DataTable
      rows={rows}
      headers={headers}
      isSortable={true}
      render={({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getTableProps,
      }) => (
        <TableContainer
          title="CalTracker Equipment Table"
          description="A collection of equipment with their respective calibration data.">
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                <TableExpandHeader />
                {headers.map(header => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <React.Fragment key={row.id}>
                  <TableExpandRow {...getRowProps({ row })}>
                    {row.cells.map(cell => (
                      <TableCell
                        key={cell.id}
                        style={{
                          backgroundColor: dueDateColor(
                            row.id,
                            cell.id,
                            cell.value
                          ),
                          color: outForCalFont(
                            row.id,
                            cell.id,
                            row.cells[5].value
                          ),
                        }}>
                        {' '}
                        {cell.value}{' '}
                      </TableCell>
                    ))}
                  </TableExpandRow>
                  <TableExpandedRow colSpan={headers.length + 1}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <th style={{ padding: '0.95em' }}>
                            Measurement Type
                          </th>
                          <th>Range</th>
                          <th>Accuracy</th>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>{getMeasurements(row.id)[0][0]}</TableCell>
                          <TableCell>{getMeasurements(row.id)[1][0]}</TableCell>
                          <TableCell>{getMeasurements(row.id)[2][0]}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{getMeasurements(row.id)[0][1]}</TableCell>
                          <TableCell>{getMeasurements(row.id)[1][1]}</TableCell>
                          <TableCell>{getMeasurements(row.id)[2][1]}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{getMeasurements(row.id)[0][2]}</TableCell>
                          <TableCell>{getMeasurements(row.id)[1][2]}</TableCell>
                          <TableCell>{getMeasurements(row.id)[2][2]}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{getMeasurements(row.id)[0][3]}</TableCell>
                          <TableCell>{getMeasurements(row.id)[1][3]}</TableCell>
                          <TableCell>{getMeasurements(row.id)[2][3]}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{getMeasurements(row.id)[0][4]}</TableCell>
                          <TableCell>{getMeasurements(row.id)[1][4]}</TableCell>
                          <TableCell>{getMeasurements(row.id)[2][4]}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableExpandedRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
};

export default EquipmentTable;
