<template>
  <div class="ranger-wiki-container" @click="ondismiss" v-if="shown">
    <div class="ranger-wiki" :style="getContainerScaling()" @click.stop="() => {}">
      <div class="sections">
        <b>Topics</b>
        <div class="btn" @click="selected = 0" :class="{ selected: selected == 0}">10 Essentials</div>
        <div class="btn" @click="selected = 1" :class="{ selected: selected == 1 }">Leave No Trace Principles</div>
        <div class="btn" @click="selected = 2" :class="{ selected: selected == 2 }">Climate Change</div>
        <div class="btn" @click="selected = 3" :class="{ selected: selected == 3 }">Invasive Species</div>
        <div class="btn" @click="selected = 4" :class="{ selected: selected == 4 }">Forest Health</div>
        <div class="btn" @click="selected = 5" :class="{ selected: selected == 5 }">Preserving Historic Sites</div>
        <div class="btn" @click="selected = 6" :class="{ selected: selected == 6 }">Park History</div>        
      </div>
      <div class="content">
        <div class="text" v-if="selected == 0">
          <b class="title">10 Essentials</b>
          <p>It’s important to be prepared when you go on an adventure in the outdoors. This list covers all your bases.</p>

          <b>Navigation: map, compass, and GPS system</b>
          <p>
            Navigation systems are used when planning your route before your trip, and when you need help orienting yourself in your surroundings during your activity. Know how to use a topographical or relief map as well as your compass or GPS unit before going out.
          </p>
          
          <b>Sun Protection: sunglasses, sunscreen, and hat</b>
          <p>
            Sun protection is necessary to protect your skin and eyes against harsh UV rays that are responsible for sunburns and skin cancer. Consider using sunglasses, sunscreen, and hats. Sun-protection clothing such as pants and long sleeve shirts can also help minimize your exposure to the sun.
          </p>

          <b>Insulation: jacket, hat, gloves, rain shell, and thermal underwear</b>
          <p>
            Nature is unpredictable. Be prepared for sudden changes in weather conditions. Pack an extra layer of clothing that reflects the most extreme conditions you could encounter.
          </p>

          <b>Illumination: flashlight, lanterns, and headlamp</b>
          <p>
            Lighting is indispensable in the outdoors where no conventional light sources can be found. Items include flashlights, lanterns, and headlamps. Headlamps are the preferred light source because they are hands-free. Be sure to pack extra batteries.
          </p>

          <b>First aid kit</b>
          <p>
            Be prepared for emergencies by packing first-aid supplies with you. Start with a pre-made kit and modify it to fit your trip and your medical needs. Check the expiration date on all items and replace them as needed. Consider including an emergency guide in case you are faced with an unfamiliar medical emergency.
          </p>

          <b>Fire: matches, lighter, and fire starters</b>
          <p>
            Fire can be an emergency signal and a heat source for cooking and staying warm. Pack matches (preferably waterproof) and fire starters - items that catch fire quickly and sustain a flame (e.g. lighter). Familiarize yourself with the fire use regulations of your park before heading out.
          </p>
          
          <b>Repair kit and tools: duct tape, knife, screwdriver, and scissors</b>
          <p>
            Carry a basic repair kit with you to help repair equipment. The kit should include items such as duct tape, a knife, and scissors. Consider packing a multi-tool, a compact version of many tools that can include a knife, screwdriver, can opener, etc. Be sure to bring any tools specific to your trip and your activity.
          </p>

          <b>Nutrition: food</b>
          <p>
            You should always be prepared for the possibility of changes to your trip plans. Pack an extra day's supply of food, preferably no-cook items that have good nutritional value in order to keep your energy high. Salty and easy to digest snacks (e.g. trail mix, nuts, and granola bars) work well for outdoor activities.
          </p>

          <b>Hydration: water and water treatment supplies</b>
          <p>
            Staying hydrated on your trip is of utmost importance! Physical activity increases your risk of dehydration (loss of water and salts from the body), which can lead to negative health consequences. If you’re active outdoors (hiking, biking, running, swimming, etc.), especially in hot weather, you should plan to drink about one-half liter to a full liter per hour to remain hydrated. One liter is about the same as four cups, or two 16.9-ounce water bottles. Prepare your water before you need it and drink before you get thirsty. Do not allow yourself to become dehydrated. Before heading out on your trip, be sure to identify if there are any bodies of water at your destination that you could collect water from and treat using your water treatment supplies.
          </p>
          
          <b>Emergency Shelter: tent, space blanket, tarp, and bivy</b>
          <p>
            Shelter is one of the most important elements during an emergency survival situation. It can protect you from severe weather conditions and exposure to the elements. A tent, tarp, bivy sack, or emergency space blanket are all light weight options for emergency shelter.
          </p>

          <p>
            <a href="https://www.nps.gov/articles/10essentials.htm" target="_blank">From National Park Service</a>
          </p>
        </div>

        <div class="text" v-if="selected == 1">
          <b class="title">Leave No Trace Principles</b>
          <ul>
            <li>Plan Ahead and Prepare</li>
            <li>Travel and Camp on Durable Surfaces</li>
            <li>Dispose of Waste Properly</li>
            <li>Leave What You Find</li>
            <li>Minimize Campfire Impacts</li>
            <li>Respect Wildlife</li>
            <li>Be Considerate of Other Visitors</li>
          </ul>
          <p><i>The Leave No Trace copyrighted Seven Principles, trademarked logo, associated artwork and texts are the property of the Leave No Trace Center for Outdoor Ethics.</i></p>
        </div>

        <div class="text" v-if="selected == 2">
          <b class="title">Climate Change</b>
          <p>
            What is climate change? Climate change refers to a significant long-term shift in weather variables and includes not only shifts in mean conditions (e.g., increasing average annual temperature and sea level) but also changes in climate variability (e.g., more intense storms and flooding).
          </p>
          <p>
            The human impact of burning fossil fuels is increasing the amount of greenhouse gases in the atmosphere, causing changes in the global climate that are out of the ordinary as compared to the cycles of ice ages that have been occurring over the past millions of years.
          </p>
          <p>
            If human emissions of greenhouse gases continue, scientists project that climate change will accelerate in the future. Using climate models and observations, scientists have a very good understanding of average change over the entire planet, but making predictions for regional and local areas is more challenging.
          </p>
          <p>
            Therefore, exactly how climate change will impact a specific National Park is a difficult question to answer. Nevertheless, climate changes have and will continue to occur in parks and will impact the ecosystems that the parks aim to protect.
          </p>
          <img src="/static/misc/avg-mean-trends.png" />
          <p>
            Ecosystems everywhere on the planet are affected by a changing climate. One example of these changes is that of water. With warmer winters, more rain falls rather than snow, which runs off the slopes instead of contributing to snowpack to feed glaciers. Due to this effect, the glaciers and snowpack in high-elevation regions are growing smaller. Plants and animals, as well as humans, are also affected by this change because a smaller snowpack means less water melting through the spring and summer. Also, the peak flow through rivers will occur at a different time of the year, which will affect plants and animals the depend on water during a specific season. Trees may be further affected because with warmer temperatures forest fires and various tree pests and diseases will likely increase.
          </p>
          <p>
            Today, park managers are faced with many decisions about how to maintain the park and the ecosystems it contains to help protect plants and animals in the face of changing climate. These decisions cover many issues, including how to manage roads and trails, plant and animal species, and human impacts on the park, among many others. The underlying question behind all of these decisions is whether or not any action should be taken. Should park managers step in to preserve parks as they have been, or should they step back to allow ecosystems to adjust naturally to changes in climate? This question is under ongoing debate and different projects across the country have taken different approaches. On different issues related to climate change, parks may vary their response from simply being concerned about an issue, to monitoring the issue, to actually actively managing the issue. 
          </p>
          <img src="/static/misc/topics-affected-climate-change.png" />
          <p>
            <i>Percentage of parks concerned about, monitoring, or managing listed topics in National Park Service–administered wilderness for the purpose of addressing climate change and its effects (n = 46 park units).</i>
          </p>
          <p>
            <a href="https://www.nps.gov/subjects/climatechange/index.htm" target="_blank">Adapted from National Park Service</a>
          </p>
        </div>

        <div class="text" v-if="selected == 3">
          <b class="title">Invasive Species</b>
          <p>
            Invasive species are plants and animals that are not naturally found in a particular region and have damaging effects on the natural environment. Native species are those that are naturally found and contribute to the delicate balance of the ecosystem. National parks are affected both by rapid changes in climate as well as the spread of invasive species. In fact, changes in climate can contribute to the spread of invasive species by changing environmental conditions so that native species are not able to compete.
          </p>
          <img src="../assets/wiki/invasive-1.png" />
          <p>
            <i>Image from National Park Service</i>
          </p>
          <p>
            Park management must respond to both changes in climate as well as changes in plants and animals in order to preserve the park resources and the experience of visitors. Together, climate change and invasive species can affect the park in many ways, such as preventing native plants from growing in normal ways, forcing native species out of their normal habitats, and causing safety hazards for park visitors.
          </p>
          <p>
            Some examples of situations in which climate change and invasive species interact:
          </p>
          <ul>
            <li>In the eastern US, there are already many invasive species that threaten the health of forests. In the next 20-30 years, projected climate change will continue to impact the native species of the forests.</li>
            <li>In the southwestern US, invasive grass species impact the way in which fires burn the landscape. This change will increase effects on the forests from stresses due to climate change.</li>
            <li>In the western US, warming water in rivers due to a changing climate presents a challenge to native species of fish that are used to colder temperatures. Invasive species of fish that are better adapted to warm waters may outcompete the native species.</li>
          </ul>
          <p>
            Park managers can adjust to what scientists predict about future climate changes and impacts on the native species. To do this successfully, park managers must team up with neighboring parks and communities. Some approaches might try to resist changes to the environment, for example by removing invasive species. Other approaches may actually control changes in a manageable manner, for example by helping native species to adjust to climate changes with control of invasive species. Approaches will vary from park to park and depend on the specific ecosystems that exist in particular regions.
          </p>
          <img src="../assets/wiki/invasive-2.png" />
          <p>
            <i>Image from National Park Service</i>
          </p>
          <p>
            <a href="https://www.nps.gov/subjects/climatechange/invasivemgmt.htm" target="_blank">Adapted from National Park Service</a>
          </p>
        </div>

        <div class="text" v-if="selected == 4">
          <b class="title">Forest Health</b>
          <p>
            Trees and their life cycles are a very important part of ecosystems across the country and across the globe. They grow tall, creating a canopy that provides shade to species on the forest floor. Their roots reach down into the ground through a complex network that is intimately tied to mushroom populations. Their leaves provide food for large mammals and insects alike. And after their long lifespans end, fallen trunks return to the forest as they decompose and promote the growth and health of the future forest. 
          </p>
          <p>
            Drier climate, hotter temperatures, and spread of forest diseases and bugs have weakened the health of forests in many places. This decline in health can be seen in the colors of trees, scarring on the branches and trunks of trees, and overall tree deaths. Three of the main causes of tree decline in western North America are Western Spruce Budworm, Mountain Pine Beetle, and White Pine Blister Rust. Each of these impacts trees in different ways and at different rates. For example, the budworm attacks the tree’s leaves, leaving them reddened in color, but not killing the tree. The Pine Beetle also results in a reddening of the tree, but in a completely different way. The beetle lives under the bark of the tree, seeking its nutrients, and can kill a tree within a single year. 
          </p>
          <p>
            In general, natural weather events that affect trees work to keep the ecosystem in balance. Historically, droughts, windstorms, and fires all thin the forest in a natural way and promote a healthy forest. However, with current changes in climate, more extreme and longer-lasting impacts are taking place, which negatively impact forest health instead. Park managers must actively monitor forests to plan for management of forest health. 
          </p>
          <img src="/static/wiki/red-and-dead-trees.jpg" />
          <p>
            <i>Red and dead trees in Glacier National Park. Image from National Park Service.</i>
          </p>
          <p>
            <a href="https://www.nps.gov/articles/forest-health-brief.htm" target="_blank">Adapted from National Park Service</a>
          </p>
        </div>

        <div class="text" v-if="selected == 5">
          <b class="title">Preserving Historic Sites</b>
          <p>
            An important part of the mission of the National Park Service is to preserve sites of historic value or significance. Historic preservation identifies what are important parts of the past that are worthy of preservation, as well as what can we learn in the future from the past. In 1966 Congress passed the National Historic Preservation Act after President Lyndon B. Johnson created a special committee on historic preservation. This law was a major turning point for attitudes throughout the country toward the importance and significance of protecting valuable history.
          </p>
          <p>
            Today, this preservation must take into account preventing encroaching development, continual and appropriate maintenance, protection from natural hazards, and promoting understanding of the historical site. Each of these goals may look different depending on the site that is being protected. In certain situations, if the preservation of a historical site puts the preservation of the natural ecosystem at risk, park managers may be faced with difficult decisions about how to prioritize what should be protected.
          </p>
          <p>
            <a href="https://www.nps.gov/subjects/historicpreservation/protect.htm" target="_blank">Adapted from National Park Service</a>
          </p>
        </div>

        <div class="text" v-if="selected == 6">
          <b class="title">Park History</b>
          <p>
            The first national park in the United States was Yellowstone National Park, located in Montana and Wyoming, before they had even become states. Congress decided to create Yellowstone in an Act on March 1, 1872 so that the public could enjoy the scenic land in its natural state. This Act paved the way for countries all over the world to create similar parks to protect the natural environment.
          </p>
          <p>
            Over the next few decades, other lands in the US were added to this collection of federally protected parks, but there was no single organization that took care of all these different lands. On August 25th 1916, President Woodrow Wilson created the National Park Service to oversee all of the national parks and monuments. This act was called the Organic Act, and its goal was to create the National Park Service to preserve these lands so that they could be enjoyed by the public as well as future generations.
          </p>
          <img src="../assets/wiki/wilson.png" />
          <p>
            <i>Image from US Library of Congress</i>
          </p>
          <p>
            Actions from the President continued to affect the growth of the National Park Service. In 1933, Franklin D. Roosevelt added 56 sites that had been maintained by other government agencies to the National Park System (Executive Order in 1933). This act added sites to the National Park System that were not only beautiful, but that were also important historically and scientifically.
          </p>
          <p>
            Today the National Park System includes over 400 different lands across more than 84 million acres in 50 states and US territories. These different parks and monuments have been added to the System over time through acts of Congress. Congress is advised by the National Park Service itself as to what additions and changes should be made to the System. The President does not have the authority to create National Parks, but can declare land that is already federally controlled to be a National Monument (Antiquities Act of 1906).
          </p>
          <p>
            Over 20,000 employees work for the National Park Service today. Employees help maintain the parks and work with communities across the country to facilitate recreational activities, such as hiking and camping, as well as preserving historical and cultural significance of the lands. The National Park Service is the guardian of these precious lands and is an environmental advocate working to maintain the lands for future generations.
          </p>
          <img src="../assets/wiki/nps.png" />
          <p>
            <i>Image from National Park Service</i>
          </p>
          <p>
            <a href="https://www.nps.gov/aboutus/history.htm" target="_blank">Adapted from National Park Service</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Scaler from '../common/Scaler';

  export default {
    name: 'RangerWiki',
    props: ['registerShow'],
    mixins: [Scaler],
    data() {
      return {
        selected: 0,
        shown: false
      }
    },
    mounted() {
      this.registerShow(this.show);
    },
    methods: {
      show(page) {
        this.selected = page || 0;
        this.shown = true;
      },
      ondismiss() {
        this.selected = 0;
        this.shown = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ranger-wiki-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw !important;
    height: 100vh;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    .ranger-wiki {
      background-image: url('../assets/ui/ranger-wiki-bg.png');
      width: 800px;
      height: 600px;
      display: flex;
      flex-direction: row;

      .sections, .content {
        width: 323px;
        margin-left: 55px;
        margin-top: 60px;
        margin-bottom: 60px;
      }

      .sections .btn {
        cursor: pointer;

        &.selected {
          color: blue;
          font-weight: bold;
        }

        &:hover {
          text-decoration: underline;
        }
      }

      .content .text {
        overflow-y: scroll;
        overflow-x: hidden;
        height: 450px;
        text-align: left;

        b {
          display: block;
        }

        b:not(.title) {
          margin-top: 1em;
        }

        b.title {
          text-decoration: underline;
          margin-bottom: 0.5em;
        }
      }

      .content img {
        max-width: 100%;
      }
    }
  }
</style>
