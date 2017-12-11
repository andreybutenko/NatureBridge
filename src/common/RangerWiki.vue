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
          <p>
            Actions from the President continued to affect the growth of the National Park Service. In 1933, Franklin D. Roosevelt added 56 sites that had been maintained by other government agencies to the National Park System (Executive Order in 1933). This act added sites to the National Park System that were not only beautiful, but that were also important historically and scientifically.
Today the National Park System includes over 400 different lands across more than 84 million acres in 50 states and US territories. These different parks and monuments have been added to the System over time through acts of Congress. Congress is advised by the National Park Service itself as to what additions and changes should be made to the System. The President does not have the authority to create National Parks, but can declare land that is already federally controlled to be a National Monument (Antiquities Act of 1906).
          </p>
          <p>
            Over 20,000 employees work for the National Park Service today. Employees help maintain the parks and work with communities across the country to facilitate recreational activities, such as hiking and camping, as well as preserving historical and cultural significance of the lands. The National Park Service is the guardian of these precious lands and is an environmental advocate working to maintain the lands for future generations.
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
          <p>
            <a href="https://www.nps.gov/subjects/climatechange/invasivemgmt.htm" target="_blank">Adapted from National Park Service</a>
          </p>
        </div>

        <div class="text" v-if="selected == 2">
          <b>Rivers</b>
          <p>
            Water defines Olympic National Park. In cloud form it delivers abundant rain and snow. As frozen glaciers it sculpts the peaks. In snow-melt rivulets it waters mountain meadows then feeds powerful rivers rushing to the sea. Alpine tarns perch on peaks and several huge lakes lie in the lowlands. These streams, rivers and lakes are a circulatory system—life-blood of the park's diversity.
          </p>
          <p>
            Mount Olympus, the park's highest peak, is in the middle of the range. Rivers radiate out from the central mountains like spokes on a wheel. On the park's west side, valleys are broad and U-shaped and rivers meander over wide floodplains. On other sides, the rivers are often constricted into narrow, steep-walled valleys.
          </p>
          <p>
            For millennia, the Elwha River ran wild, connecting mountains and seas in a thriving ecosystem. The river proved to be an ideal habitat for anadromous (sea-run) fish, with eleven varieties of salmon and trout spawning in its waters. For millennia these fish thrived in the river and provided food for the Lower Elwha Klallam tribe who resided along its banks.
          </p>
          <p>
            In the late 1800s a growing nation looked to the Northwest to supply the lumber needed to build new cities.This brought rapid change to the Olympic Peninsula and especially to the Elwha River and the people of the Lower Elwha Klallam tribe. In the early 1900s, two dams, Elwha and Glines Canyon, were built on the river. The dams fueled regional growth, but blocked the migration of salmon upstream, disrupted the flow of sediment and wood downstream, and flooded the historic homelands and cultural sites of the Lower Elwha Klallam Tribe.
          </p>
          <p>
            For over a century, the web of ecological and cultural connections in the Elwha Valley were broken - then the river's story changed course. In 1992, Congress passed the Elwha River Ecosystem and Fisheries Restoration Act, authorizing dam removal to restore the altered ecosystem. After two decades of planning, the largest dam removal in U.S. history began on September 17, 2011. Six months later Elwha Dam was gone, followed by the Glines Canyon Dam in 2014. Today, the Elwha River once again flows freely from its headwaters in the Olympic Mountains to the Strait of Juan de Fuca.
          </p>
        </div>

        <div class="text" v-if="selected == 3">
          <b>Climate Change</b>
          <p>
            Climate change refers to a significant long-term shift in weather variables and includes not only shifts in mean conditions (e.g., increasing mean annual temperature and sea level) but also changes in climate variability (e.g., more intense storms and flooding).
          </p>
          <b>Climate Change At Olympic</b>
          <p>
            Like ecosystems around the world, the park is feeling the impact of human- driven climate change. Warmer winters mean some precipation that used to fall as snow—feeding our glaciers—is now falling as rain. So Olympic's glaciers are retreating. Blue Glacier on Mount Olympus lost three football fields in length and 74 feet (23m) of thickness between 1987 and 2010. Decreasing snowpack also means less water for salmon and other wildlife, plants and humans living downstream. Forest fires and mortality from forest pests are likely to increase in a warmer world.
          </p>
          <p>
            Is Olympic National Park large enough to give its resident species places to survive in a changing world? The diversity of landscapes and rainfall patterns here may provide a small buffer for the natural world as the human community makes decisions about addressing climate change. Choices we all make today may help species cope, so that our grandchildren can still experience the diverse wonder of Olympic.
          </p>
          <p>
            Environmental factors include everything that changes the local environment. This includes natural forces like weather and human effects like non-biodegradable litter.
          </p>
          <ul>
            <li><b>Water</b>: Rivers and glaciers carve out canyons and valleys. Ocean waves grind away cliff sides and create beaches of small rocks and shells. Water freezing in crevices splits cliffs into boulders and boulders into smaller rocks. Rain fosters the moss-laden rainforests of the Hoh and Quinault.</li>
            <li><b>Earth</b>: Geological processes like earthquakes and tectonic forces shape mountains.</li>
            <li><b>Wind</b>: Windstorms blow down trees and give seedlings the sun and space they need to grow.</li>
            <li><b>Fire</b>: Lightning-caused fires burn off undergrowth and give new seedlings room to grow.</li>
            <li><b>Roosevelt Elk</b>: Roosevelt elk help some plants get sunlight by keeping others from growing too high or dense.</li>
            <li><b>Plants and Animals</b>: Insects eat plant material. Beavers dam streams. Roosevelt elk graze on shrubs and low-growing plants. Fungi and bacteria also play important roles, especially in the decomposition of plants or animals.</li>
          </ul>
          <p>
            Humans influence their environment simply by being in a place. These are a few examples of how we influence Olympic National Park:
          </p>
          <ul>
            <li><b>Highly-visible impacts</b> Roads, trails, walking over plants, and leaving trash behind all influence the natural environment.</li>
            <li><b>Influences on animal life</b>: Feeding human food to animals can make them dependent and less able to forage on their own. Once accustomed to humans, larger animals like deer or bears can become dangerous in their search for food. Scaring wildlife with loud noises or altering their habitat can affect where and how they live.</lio>
            <li><b>Global impacts</b>: Automobiles and industry putting tons of carbon dioxide into the atmosphere eventually causes worldwide temperatures to rise and glaciers to melt.</li>
            <li><b>Impacts to Water Quality</b>: Chemical runoff, sedimentation, and accumulation of nitrogen in mountain lakes influence water quality in Olympic National Park. More information on NPS studies on water quality can be found here.</li>
            <li><b>Impacts to Ecosystem</b>: The introduction and spreading of Nonnative Species and Invasive Plants can have many negative effects on the natural environment.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RangerWiki',
    props: ['shown', 'ondismiss'],
    data() {
      return {
        selected: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ranger-wiki-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 999;
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
        height: 500px;
      }
    }
  }
</style>
