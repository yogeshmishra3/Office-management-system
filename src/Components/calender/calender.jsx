import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ScheduleComponent, ResourcesDirective, ResourceDirective, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import axios from 'axios';
import { useAuth } from '../AuthProvider/AuthContext';

const Calender = () => {
  const scheduleObj = useRef(null);
  const [users, setUsers] = useState([]);
  const { usersId } = useAuth();  // If needed for future use

  // DataManager instance for Schedule Component
  const dataManager = new DataManager({
    url: 'https://server-oms.vercel.app/GetData',
    crudUrl: 'https://server-oms.vercel.app/BatchData',
    adaptor: new UrlAdaptor(),
    crossDomain: true
  });

  // Fetch users data
  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get('https://server-oms.vercel.app/users');
        setUsers(response.data);  // Set the room data to state
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };

    fetchRoomData();
  }, []);

  return (
      <ScheduleComponent
        width={"100%"}
        height={"100%"}
        id="schedule"
        ref={scheduleObj}
        currentView="Week"
        group={{ allowGroupEdit: true }}
        allowDragAndDrop={false}
        eventSettings={{ dataSource: dataManager }}  // Event data source
      >
        <ResourcesDirective>
          <ResourceDirective
            field='Users'
            title='Users'
            name='Users'
            idField='_id'
            textField="name"
            allowMultiple={true}
            dataSource={users}
          />
        </ResourcesDirective>
        <ViewsDirective>
          <ViewDirective option="Day" />
          <ViewDirective option="Week" />
          <ViewDirective option="WorkWeek" />
          <ViewDirective option="Month" />
          <ViewDirective option="Agenda" />
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop]} />
      </ScheduleComponent>
  );
};

export default Calender;
