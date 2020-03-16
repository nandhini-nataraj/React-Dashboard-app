import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const TablePage = (props) => {
const data = {
columns: [
{
label: '',
field: '',
sort: 'asc'
},
{
label: 'Mani',
field: 'heading0',
sort: 'asc'
},
{
label: 'Vani',
field: 'heading1',
sort: 'asc'
},
{
label: 'Steve',
field: 'heading2',
sort: 'asc'
},
{
label: 'Joseph',
field: 'heading3',
sort: 'asc'
},
{
label: 'Ramu',
field: 'heading4',
sort: 'asc'
},
{
label: 'Nandhini',
field: 'heading5',
sort: 'asc'
},
{
label: 'Anitha',
field: 'heading6',
sort: 'asc'
},
{
label: 'Muthu',
field: 'heading7',
sort: 'asc'
},
{
label: 'Vignesh',
field: 'heading8',
sort: 'asc'
}
],
rows: [
{
'id': 'Business Acumen',
'heading0': '1',
'heading1': '0',
'heading2': '3',
'heading3': '3',
'heading4': '4',
'heading5': '2',
'heading6': '3',
'heading7': '4',
'heading8': '4'
},
{
'id': 'Data Analytics',
'heading0': '4',
'heading1': '3',
'heading2': '2',
'heading3': '2',
'heading4': '1',
'heading5': '0',
'heading6': '2',
'heading7': '2',
'heading8': '1'
},
{
'id': 'Advanced Data Analytics',
'heading0': '2',
'heading1': '3',
'heading2': '0',
'heading3': '4',
'heading4': '2',
'heading5': '0',
'heading6': '1',
'heading7': '1',
'heading8': '0'
},
{
    'id': 'Data Warehousing',
    'heading0': '0',
    'heading1': '1',
    'heading2': '2',
    'heading3': '3',
    'heading4': '4',
    'heading5': '0',
    'heading6': '2',
    'heading7': '2',
    'heading8': '2'
    }
]
};

return (
<MDBTable responsive>
  <MDBTableHead columns={data.columns} />
  <MDBTableBody rows={data.rows} />
</MDBTable>
);
};

export default TablePage;