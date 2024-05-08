export class MeetingRoom {
    id: number = 0;
    name: string = "";
    size: number = 0;
    projector?: boolean;
    tv?: boolean;
}

export const meetingRooms : MeetingRoom[]=[
    {
        "id": 1,
        "name": "馬德里",
        "size": 10,
        "projector": true,
        "tv": false
      },
      {
        "id": 2,
        "name": "里約",
        "size": 100,
        "projector": true,
        "tv": true
      },
      {
        "id": 3,
        "name": "哥多華",
        "size": 200,
        "projector": true,
        "tv": true
      },
      {
        "id": 4,
        "name": "巴塞隆納",
        "size": 50,
        "projector": false,
        "tv": true
      },
      {
        "id": 5,
        "name": "耶路撒冷",
        "size": 50,
        "projector": false,
        "tv": true
      },
      {
        "id": 6,
        "name": "Room1",
        "size": 150,
        "projector": true,
        "tv": true
      },
      {
        "id": 7,
        "name": "Room2",
        "size": 30,
        "projector": true,
        "tv": false
      },
      {
        "id": 8,
        "name": "Room3",
        "size": 20,
        "projector": false,
        "tv": true
      },
      {
        "id": 9,
        "name": "Room4",
        "size": 250,
        "projector": true,
        "tv": true
      },
      {
        "id": 10,
        "name": "Room5",
        "size": 70,
        "projector": true,
        "tv": true
      },
      {
        "id": 11,
        "name": "Room6",
        "size": 20,
        "projector": false,
        "tv": true
      }
]