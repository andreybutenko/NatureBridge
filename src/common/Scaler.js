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
    },
    getContainerScalingVertical() {
      if(window.innerHeight > 724) {
        return {};
      }
  
      const scaleFactor = window.innerHeight / 724;
  
      return {
        transform: 'scale(' + scaleFactor + ')'
      }
    }
  } 
}