import { CBadge, CButton, CSmartTable } from '@coreui/react-pro';
import { useState } from 'react';

export interface IDummyUser {
  id: number;
  name: string;
  registered: string;
  role: string;
  status: string;
  _props?: any;
  _cellProps?: any;
}

export const usersData: IDummyUser[] = [
  { id: 0, name: 'John Doe', registered: '2018/01/01', role: 'Guest', status: 'Pending' },
  {
    id: 1,
    name: 'Samppa Nori',
    registered: '2018/01/01',
    role: 'Member',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Estavan Lykos',
    registered: '2018/02/01',
    role: 'Staff',
    status: 'Banned',
    _cellProps: { all: { className: 'fw-semibold' }, name: { color: 'info' } },
  },
  { id: 3, name: 'Chetan Mohamed', registered: '2018/02/01', role: 'Admin', status: 'Inactive' },
  {
    id: 4,
    name: 'Derick Maximinus',
    registered: '2018/03/01',
    role: 'Member',
    status: 'Pending',
  },
  { id: 5, name: 'Friderik Dávid', registered: '2018/01/21', role: 'Staff', status: 'Active' },
  { id: 6, name: 'Yiorgos Avraamu', registered: '2018/01/01', role: 'Member', status: 'Active' },
  {
    id: 7,
    name: 'Avram Tarasios',
    registered: '2018/02/01',
    role: 'Staff',
    status: 'Banned',
    _props: { color: 'warning', align: 'middle' },
  },
  { id: 8, name: 'Quintin Ed', registered: '2018/02/01', role: 'Admin', status: 'Inactive' },
  { id: 9, name: 'Enéas Kwadwo', registered: '2018/03/01', role: 'Member', status: 'Pending' },
  { id: 10, name: 'Agapetus Tadeáš', registered: '2018/01/21', role: 'Staff', status: 'Active' },
  { id: 11, name: 'Carwyn Fachtna', registered: '2018/01/01', role: 'Member', status: 'Active' },
  { id: 12, name: 'Nehemiah Tatius', registered: '2018/02/01', role: 'Staff', status: 'Banned' },
  { id: 13, name: 'Ebbe Gemariah', registered: '2018/02/01', role: 'Admin', status: 'Inactive' },
  {
    id: 14,
    name: 'Eustorgios Amulius',
    registered: '2018/03/01',
    role: 'Member',
    status: 'Pending',
  },
  { id: 15, name: 'Leopold Gáspár', registered: '2018/01/21', role: 'Staff', status: 'Active' },
  { id: 16, name: 'Pompeius René', registered: '2018/01/01', role: 'Member', status: 'Active' },
  { id: 17, name: 'Paĉjo Jadon', registered: '2018/02/01', role: 'Staff', status: 'Banned' },
  {
    id: 18,
    name: 'Micheal Mercurius',
    registered: '2018/02/01',
    role: 'Admin',
    status: 'Inactive',
  },
  {
    id: 19,
    name: 'Ganesha Dubhghall',
    registered: '2018/03/01',
    role: 'Member',
    status: 'Pending',
  },
  { id: 20, name: 'Hiroto Šimun', registered: '2018/01/21', role: 'Staff', status: 'Active' },
  { id: 21, name: 'Vishnu Serghei', registered: '2018/01/01', role: 'Member', status: 'Active' },
  { id: 22, name: 'Zbyněk Phoibos', registered: '2018/02/01', role: 'Staff', status: 'Banned' },
  { id: 23, name: 'Aulus Agmundr', registered: '2018/01/01', role: 'Member', status: 'Pending' },
  {
    id: 42,
    name: 'Ford Prefect',
    registered: '2001/05/25',
    role: 'Alien',
    status: "Don't panic!",
  },
];

const Table = () => {
  const [details, setDetails] = useState<number[]>([]);
  const columns = [
    {
      key: 'name',
    },
    'registered',
    { key: 'role', filter: false, sorter: false },
    { key: 'status' },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
    },
  ];

  const getBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'secondary';
      case 'Pending':
        return 'warning';
      case 'Banned':
        return 'danger';
      default:
        return 'primary';
    }
  };
  const toggleDetails = (index: number) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };
  return (
    <CSmartTable
      activePage={3}
      clickableRows
      columns={columns}
      items={usersData as any}
      scopedColumns={{
        status: (item: any) => (
          <td>
            <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
          </td>
        ),
        show_details: (item: any) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={() => {
                  toggleDetails(item._id);
                }}
              >
                {details.includes(item._id) ? 'Hide' : 'Show'}
              </CButton>
            </td>
          );
        },
      }}
      selectable
      sorterValue={{ column: 'name', state: 'asc' }}
      tableHeadProps={{
        className: 'table-head',
      }}
      tableBodyProps={{
        className: 'table-body',
      }}
      tableProps={{
        striped: true,
        hover: true,
        className: 'custom-table',
      }}
    />
  );
};

export default Table;
