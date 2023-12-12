import { defineStore } from "pinia";

// API simulation (mocked data)
export const useMemoryStore = defineStore("Memory", {
  state: () => {
    return {
      cards: [
        {
          id: 1,
          image: require('../components/images/happy.png'),
          name: 'Happy',
          visible: false
        },
        {
          id: 2,
          image: require('../components/images/happy.png'),
          name: 'Happy',
          visible: false
        },
        {
          id: 3,
          image: require('../components/images/dog.png'),
          name: 'Dog',
          visible: false
        },
        {
          id: 4,
          image: require('../components/images/dog.png'),
          name: 'Dog',
          visible: false
        },
        {
          id: 5,
          image: require('../components/images/doggy.png'),
          name: 'Doggy',
          visible: false
        },
        {
          id: 6,
          image: require('../components/images/doggy.png'),
          name: 'Doggy',
          visible: false
        },
        {
          id: 7,
          image: require('../components/images/shiba.png'),
          name: 'Shiba',
          visible: false
        },
        {
          id: 8,
          image: require('../components/images/shiba.png'),
          name: 'Shiba',
          visible: false
        },
        {
          id: 9,
          image: require('../components/images/golden-retriever.png'),
          name: 'Golden',
          visible: false
        },
        {
          id: 10,
          image: require('../components/images/golden-retriever.png'),
          name: 'Golden',
          visible: false
        },
        {
          id: 11,
          image: require('../components/images/dogs.png'),
          name: 'Dogs',
          visible: false
        },
        {
          id: 12,
          image: require('../components/images/dogs.png'),
          name: 'Dogs',
          visible: false
        },
        {
          id: 13,
          image: require('../components/images/bone.png'),
          name: 'Bone',
          visible: false
        },
        {
          id: 14,
          image: require('../components/images/bone.png'),
          name: 'Bone',
          visible: false
        },
        {
          id: 15,
          image: require('../components/images/pet.png'),
          name: 'Pet',
          visible: false
        },
        {
          id: 16,
          image: require('../components/images/pet.png'),
          name: 'Pet',
          visible: false
        } 
      ],
      selectedCards: [] as any
    }
  },
})
