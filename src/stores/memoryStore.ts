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
        },
        {
          id: 2,
          image: require('../components/images/happy.png'),
          name: 'Happy',
        },
        {
          id: 3,
          image: require('../components/images/dog.png'),
          name: 'Dog',
        },
        {
          id: 4,
          image: require('../components/images/dog.png'),
          name: 'Dog',
        },
        {
          id: 5,
          image: require('../components/images/doggy.png'),
          name: 'Doggy',
        },
        {
          id: 6,
          image: require('../components/images/doggy.png'),
          name: 'Doggy',
        },
        {
          id: 7,
          image: require('../components/images/shiba.png'),
          name: 'Shiba',
        },
        {
          id: 8,
          image: require('../components/images/shiba.png'),
          name: 'Shiba',
        },
        {
          id: 9,
          image: require('../components/images/golden-retriever.png'),
          name: 'Golden',
        },
        {
          id: 10,
          image: require('../components/images/golden-retriever.png'),
          name: 'Golden',
        },
        {
          id: 11,
          image: require('../components/images/dogs.png'),
          name: 'Dogs',
        },
        {
          id: 12,
          image: require('../components/images/dogs.png'),
          name: 'Dogs',
        },
        {
          id: 13,
          image: require('../components/images/bone.png'),
          name: 'Bone',
        },
        {
          id: 14,
          image: require('../components/images/bone.png'),
          name: 'Bone',
        },
        {
          id: 15,
          image: require('../components/images/pet.png'),
          name: 'Pet',
        },
        {
          id: 16,
          image: require('../components/images/pet.png'),
          name: 'Pet',
        } 
      ],
      selectedCards: [] as any,
      pairedCards: [] as any
    }
  },
})
