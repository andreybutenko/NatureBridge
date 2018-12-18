export default {
  methods: {
    getContainerScaling() {
      if(window.innerWidth > 800) {
        return {};
      }
  
      const scaleFactor = window.innerWidth / 800;
  
      return {
        transform: 'scale(' + scaleFactor + ')'
      }
    }
  } 
}