import BusRide from './BusRide.vue';
import CampHub from './CampHub.vue';
import Cabin from './Cabin.vue';
import MessyRoom from './MessyRoom.vue';
import MessyRoomIntro from './MessyRoomIntro.vue';
import RangerStation from './RangerStation.vue';
import TrailGame from './TrailGame.vue';
import TrailHead from './TrailHead.vue';
import ConversationDemo from './ConversationDemo.vue';

export default {
  routes: [
    { path: '/', name: 'MessyRoomIntro', component: MessyRoomIntro },
    { path: '/MessyRoom', name: 'MessyRoom', component: MessyRoom },
    { path: '/BusRide', name: 'BusRide', component: BusRide },
    { path: '/CampHub', name: 'CampHub', component: CampHub },
    { path: '/Cabin', name: 'Cabin', component: Cabin },
    { path: '/TrailGame', name: 'TrailGame', component: TrailGame },
    { path: '/TrailHead', name: 'TrailHead', component: TrailHead },
    { path: '/RangerStation', name: 'RangerStation', component: RangerStation },
    { path: '/ConversationDemo', name: 'ConversationDemo', component: ConversationDemo }
  ]
}
