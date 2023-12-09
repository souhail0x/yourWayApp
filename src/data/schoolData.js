const data = [
    {
      "title": "Al Akhawayn University",
      "abbreviation": "AUI",
      "description": "Al Akhawayn University in Ifrane is a private university known for its high academic standards and beautiful campus nestled in the Atlas Mountains.",
      "imageLink": "https://example.com/al-akhawayn-university.jpg"
    },
    {
      "title": "University of Hassan II Casablanca",
      "abbreviation": "UH2C",
      "description": "The University of Hassan II Casablanca is a prominent public university in Casablanca, offering a wide range of academic programs and research opportunities.",
      "imageLink": "https://example.com/hassan-II-university.jpg"
    },
    {
      "title": "Ecole Supérieure de Technologie - Marrakech",
      "abbreviation": "EST Marrakech",
      "description": "EST Marrakech is a leading technological institute in Marrakech, providing education and research in various engineering and technology fields.",
      "imageLink": "https://example.com/est-marrakech.jpg"
    },
    {
      "title": "École Nationale des Sciences Appliquées - Rabat",
      "abbreviation": "ENSA Rabat",
      "description": "ENSA Rabat is a prestigious engineering school in Rabat known for its rigorous academic programs and contributions to scientific research and development.",
      "imageLink": "https://example.com/ensa-rabat.jpg"
    },
    {
      "title": "American School of Marrakesh",
      "abbreviation": "ASM",
      "description": "The American School of Marrakesh is an international school offering a comprehensive American curriculum, fostering a multicultural learning environment.",
      "imageLink": "https://example.com/american-school-marrakesh.jpg"
    },
    {
      "title": "Mohammed V University",
      "abbreviation": "UM5",
      "description": "Mohammed V University in Rabat is one of the oldest and most prestigious universities in Morocco, known for its strong emphasis on research and academic excellence.",
      "imageLink": "https://example.com/mohammed-v-university.jpg"
    },
    {
      "title": "Cadi Ayyad University",
      "abbreviation": "UCAM",
      "description": "Cadi Ayyad University in Marrakech is a leading academic institution, offering a wide range of programs in science, literature, and social sciences.",
      "imageLink": "https://example.com/cadi-ayyad-university.jpg"
    },
    {
      "title": "International University of Rabat",
      "abbreviation": "UIR",
      "description": "The International University of Rabat is a private institution known for its international partnerships and diverse student body, providing a global learning experience.",
      "imageLink": "https://example.com/international-university-rabat.jpg"
    },
    {
      "title": "Institute of Agronomy and Veterinary Medicine",
      "abbreviation": "IAVM",
      "description": "The Institute of Agronomy and Veterinary Medicine in Rabat focuses on agricultural and veterinary sciences, contributing to the development of the agricultural sector.",
      "imageLink": "https://example.com/agronomy-veterinary-institute.jpg"
    },
    {
      "title": "Polydisciplinary Faculty of Ouarzazate",
      "abbreviation": "FPO",
      "description": "The Polydisciplinary Faculty of Ouarzazate offers a diverse range of academic programs, contributing to the educational landscape of the region.",
      "imageLink": "https://example.com/faculty-ouarzazate.jpg"
    }
  ]
  const schoolInfos = data.map((e)=>{
    e.imageLink = "https://source.unsplash.com/random"
    return e
  })
  
export default schoolInfos
