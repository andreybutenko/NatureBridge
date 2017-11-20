import BusRide from './BusRide.vue';
import CampHub from './CampHub.vue';
import MessyRoom from './MessyRoom.vue';
import MessyRoomIntro from './MessyRoomIntro.vue';
import TrailGame from './TrailGame.vue';
import ConversationDemo from './ConversationDemo.vue';

export default {
  routes: [
    { path: '/', name: 'MessyRoomIntro', component: MessyRoomIntro },
    { path: '/MessyRoom', name: 'MessyRoom', component: MessyRoom },
    { path: '/BusRide', name: 'BusRide', component: BusRide },
    { path: '/CampHub', name: 'CampHub', component: CampHub },
    { path: '/TrailGame', name: 'TrailGame', component: TrailGame },
    { path: '/ConversationDemo', name: 'ConversationDemo', component: ConversationDemo }
  ]
}
