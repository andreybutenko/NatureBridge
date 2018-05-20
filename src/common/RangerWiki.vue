<template>
  <div class="ranger-wiki-container" @click="ondismiss" v-if="shown">
    <div class="ranger-wiki" @click.stop="() => {}">
      <div class="sections">
        <b>Topics</b>
        <div class="btn" @click="selected = 0" :class="{ selected: selected == 0 }">Park History</div>
        <div class="btn" @click="selected = 1" :class="{ selected: selected == 1 }">Invasive Species</div>
        <div class="btn" @click="selected = 2" :class="{ selected: selected == 2 }">River</div>
        <div class="btn" @click="selected = 3" :class="{ selected: selected == 3 }">Climate Change</div>
      </div>
      <div class="content">
        <div class="text" v-if="selected == 0">
          <b>Park History</b>
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

        <div class="text" v-if="selected == 1">
          <b>Invasive Species</b>
          <p>
            National parks are affected both by rapid changes in climate as well as the spread of invasive species. Invasive species are plants and animals that are not naturally found in a particular region and have damaging effects on the natural environment. Native species are those that are naturally found and contribute to the delicate balance of the ecosystem.
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

        <div class="text" v-if="selected == 2">
          <b>Rivers</b>
          <p>
            In Olympic National Park, all of the land is influenced by water. Peaks are shaped by the ice of glaciers, valleys are carved out by rivers melting from snowpack above, and the diverse vegetation and wildlife depend on the presence of water to survive. Mount Olympus is the park’s highest peak and rivers flow down in all directions, hydrating the entirety of the park.
          </p>
          <p>
            A major river within Olympic is the Elwha River, which runs northward, just east of Lake Crescent. The river is an essential piece of a thriving ecosystem, particularly as habitat for fish that move between the ocean and freshwater. Eleven varieties of salmon and trout once counted on the Elwha as the location where they returned to lay their eggs. Further, the fish that populated the waters of Elwha were an important food source for the Lower Elwha Klallam tribe who lived along the river.
          </p>
          <p>
            This delicate ecosystem balance was upended when two dams were built along the river in the early 1900s. The dams created energy to fuel the region booming due to the growing lumber industry, but also created numerous problems for the plants and animals as well as the Lower Elwha Klallam. The dams prevented fish from accessing their spawning territory beyond the dams, they changed the way in which sediment and other debris moved by the river was transported downstream, and they created lakes behind the dams that flooded a lot of the land the Lower Elwha Klallam inhabited.
          </p>

          <img src="../assets/wiki/elwha-dam.png" />
          <p>
            <i>Image from National Park Service</i>
          </p>

          <p>
            However, after almost 100 years, Congress determined that the dam should be removed, and in 2011 the largest dam removal project in the history of this country began. By 2014 both dams had been removed, but restoration of the river to its natural state is still underway. Scientists actively monitor fish species and river erosion to learn about how and how quickly a river can revert to its natural state.
          </p>

          <img src="../assets/wiki/elwha-pre.png" />

          <p>
            <i>Elwha River before dam removal. Image from The Seattle Times.</i>
          </p>

          <img src="../assets/wiki/elwha-pre.png" />

          <p>
            <i>Elwha River after dam removal. Image from The Seattle Times.</i>
          </p>
          <p>
            <a href="https://www.nps.gov/olym/learn/nature/elwha-ecosystem-restoration.htm" target="_blank">Adapted from National Park Service</a>
          </p>
        </div>

        <div class="text" v-if="selected == 3">
          <b>Climate Change</b>
          <p>
            What is climate change? Climate change refers to a significant long-term shift in weather variables and includes not only shifts in mean conditions (e.g., increasing average annual temperature and sea level) but also changes in climate variability (e.g., more intense storms and flooding). The human impact of burning fossil fuels is causing changes in the global climate that are out of the ordinary as compared to the cycles of ice ages that have been occurring over the past millions of years.
          </p>
          <p>
            Olympic National Park, like ecosystems everywhere on the planet, is affected by a changing climate. One major change is that of water. With warmer winters, more rain falls rather than snow, which runs off the slopes instead of contributing to snowpack to feed glaciers. Due to this effect, the glaciers in Olympic are growing smaller. Plants and animals, as well as humans, are also affected by this change because a smaller snowpack means less water melting through the spring and summer. Also, the peak flow through rivers will occur at a different time of the year, which will affect plants and animals the depend on water during a specific season. Trees may be further affected because with warmer temperatures forest fires and various tree pests and diseases will likely increase.
          </p>
          <p>
            Today, park managers are faced with many decisions about how to maintain the park and the ecosystems it contains to help protect plants and animals in the face of changing climate. These decisions cover many issues, including how to manage roads and trails, plant and animal species, and human impacts on the park, among many others.
          </p>
          <p>
            <a href="https://www.nps.gov/olym/planyourvisit/upload/weather-2.pdf" target="_blank">Adapted from National Park Service</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RangerWiki',
    props: ['registerShow'],
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
      }

      .content img {
        max-width: 100%;
      }
    }
  }
</style>
