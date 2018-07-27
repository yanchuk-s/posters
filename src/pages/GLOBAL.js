import Vue from 'vue'
export default new Vue({
  data () {
    return {
      checkPoster: null,
      posters: [
        {
          id: 1,
          url: 'http://4.bp.blogspot.com/-EAf9GFumnH4/VEofl7dE0WI/AAAAAAAABCQ/3bjCVL24UMs/s1600/10735611_1713629975528968_1094024815_n.jpg',
          oatherPhoto: '',
          title: 'Example 1',
          fontFamily: 'Inconsolata',
          fontSize: 43,
          rotation: 304,
          X: 26,
          Y: 185,
          bgOpacity: 0.7,
          fontColor: '0D1209',
          descrFont: 'Inconsolata',
          descrSize: 30,
          dragDescrX: 251,
          dragDescrY: 36
        },
        {
          id: 2,
          url: 'https://alternativemovieposters.com/wp-content/uploads/2012/12/sunshinebg.jpg',
          oatherPhoto: '',
          title: 'Example 2',
          fontFamily: 'Gaegu',
          fontSize: 55,
          rotation: 0,
          X: 158,
          Y: 97,
          bgOpacity: 0.8,
          fontColor: '6C2D8C',
          descrFont: 'Gaegu',
          descrSize: 30,
          dragDescrX: 186,
          dragDescrY: 360
        },
        {
          id: 3,
          url: 'https://kimherringe.com.au/wp-content/uploads/2015/07/poster-bg-1.jpg',
          oatherPhoto: '',
          title: 'Example 3',
          fontFamily: 'Skranji',
          fontSize: 40,
          rotation: 43,
          X: 333,
          Y: 22,
          bgOpacity: 0.6,
          fontColor: 'A81FED',
          descrFont: 'Skranji',
          descrSize: 30,
          dragDescrX: 40,
          dragDescrY: 235
        },
        {
          id: 4,
          url: 'https://www.komar.de/ru/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/8/-/8-487_star_wars_intro_ma.jpg',
          oatherPhoto: 'https://vignette.wikia.nocookie.net/unanything/images/f/f7/Darth_Vader.png/revision/latest?cb=20110710233331',
          title: 'May the Force be with you',
          fontFamily: 'Gloria Hallelujah',
          fontSize: 25,
          rotation: 311,
          X: 234,
          Y: 345,
          bgOpacity: 0.4,
          descrFont: 'Gloria Hallelujah',
          descrSize: 30,
          dragDescrX: 20,
          dragDescrY: 20,
          photoWidth: 290,
          photoHeight: 290,
          dragImgX: 0,
          dragImgY: 211
        }
      ],
      oatherImages: [
        { url: 'http://icons.iconarchive.com/icons/goodstuff-no-nonsense/free-space/1024/darth-vader-icon.png' },
        { url: 'https://vignette.wikia.nocookie.net/unanything/images/f/f7/Darth_Vader.png/revision/latest?cb=20110710233331' },
        { url: 'https://vignette.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png/revision/latest?cb=20140126234206' },
        { url: 'https://cdn.icon-icons.com/icons2/21/PNG/256/toons_bart_simpson_bartsimpson_2377.png' },
        { url: 'http://daymultik.ru/images/uznaj_o_svoem_geroe/Volk.png' },
        { url: 'http://www.pngall.com/wp-content/uploads/2016/03/Avengers-Hulk-PNG.png' },
        { url: 'http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bdbe.png' },
        { url: 'https://vignette.wikia.nocookie.net/evil/images/5/59/The_Death_Star.png/revision/latest?cb=20150810042957' },
        { url: 'http://pngimg.com/uploads/spider_man/spider_man_PNG4.png' },
        { url: 'https://s.tcdn.co/403/5d1/4035d1d0-14d8-3a0e-8dd6-c57f7df5a945/192/4.png' },
        { url: 'https://i.pinimg.com/originals/65/66/d6/6566d6635e53b618624c181922a9120b.png' },
        { url: 'https://pre00.deviantart.net/2083/th/pre/i/2016/331/2/0/deadpool_png__2_by_anna_x_anarchy-dapuhlg.png' },
        { url: 'https://pre00.deviantart.net/7b6b/th/pre/i/2016/331/c/c/deadpool_png__3_by_anna_x_anarchy-dapuv77.png' },
        { url: 'https://vignette.wikia.nocookie.net/vsbattles/images/f/fe/Sub_Zero.png/revision/latest?cb=20150925231849' },
        { url: 'http://www.pngmart.com/files/2/Mortal-Kombat-Scorpion-PNG-HD.png' },
        { url: 'https://vignette.wikia.nocookie.net/guitarhero/images/7/78/IronMan.png/revision/latest?cb=20140812205512' }
      ]
    }
  },
  methods: {
    posterCheck (id) {
      this.checkPoster = id
      // console.log(this.checkPoster)
    }
  }
})
