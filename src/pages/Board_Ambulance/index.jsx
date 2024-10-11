import NavBar from "../../components/navbar";
import CustomTable from "../../components/customTable";
import data from './MOCK_DATA.json'

import { RiFlag2Line } from '@remixicon/react';
import {
  Badge,
  Card,
  ProgressBar,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@tremor/react';
import { Fragment, useState } from "react";

const table_headers = ['Nome', 'Origem', 'Posição', 'Hora', 'Data', 'Tipo', 'Status']
const table_fields = ['name', 'origin', 'position', 'time_solic', 'data_solic', 'type_ambu', 'status_show']


data.map(line => {

  if (line.status === 'Solicitado') {
    line.status_show = (
      <Badge color="sky">
        {line.status}
      </Badge>
    )
  }
  else if (line.status === 'Concluido') {
    line.status_show = (
      <Badge color="emerald">
        {line.status}
      </Badge>
    )
  }
  else {
    line.status_show = (
      <Badge color="amber">
        {line.status}
      </Badge>
    )
  }

})


export default function Board1() {
  const [tableData, setTableData] = useState(data);

  function AlterTable(filter) {
    setTableData(data.filter(line => line.status == filter))
  }


  // console.log(data)

  return (
    <Fragment>
      <div className="h-screen ">
        <NavBar title="Ambulance Orders" />

        <div className="flex flex-row">
          <Card className="mx-auto max-w-xs mb-4 mt-2">
            <p className="text-center text-tremor-metric text-slate-900">Open</p>
          </Card>
        </div>

        <div className="max-h-[70%] mx-8 flex">
          <div className=" min-w-full">
            <TabGroup className="mb-1">
              <TabList variant="solid" className="mt-4">
                <Tab onClick={() => AlterTable('Solicitado')}>Open <Badge>{data.filter(item => item.status == 'Solicitado').length}</Badge></Tab>
                <Tab onClick={() => AlterTable('Concluido')}>Closed <Badge>{data.filter(item => item.status == 'Concluido').length}</Badge></Tab>
                <Tab onClick={() => AlterTable('Cancelado')}>Canceled <Badge>{data.filter(item => item.status == 'Cancelado').length}</Badge></Tab>
              </TabList>
            </TabGroup>

            <div className="max-h-full min-w-full flex">
              <CustomTable
                title={'Open Requests'}
                data={tableData}
                headers={table_headers}
                fields={table_fields}
              />
            </div>
          </div>

        </div>


      </div>
    </Fragment>
  )
}