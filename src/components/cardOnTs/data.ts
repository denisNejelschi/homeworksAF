import { v4 as uuidv4 } from 'uuid';
 export interface Landmark {
    id:string;
    name:string;
    image:string;
    interestingFacts:string[];    
}
export const landmarks:Landmark[]=[
    {
        id: uuidv4(),
        name: 'Caraiman Cross',
        image: 'https://prahovainfo.ro/images/2023/09/14/cruce_caraiman_large.jpg',
        interestingFacts: ["World's Tallest Summit Cross: The Caraiman Cross holds the Guinness World Record for being the tallest cross on a mountain peak in the world. It stands at an impressive 39.3 meters (129 feet) tall.", "Memorial to Heroes: The cross was built to honor the Romanian heroes who died during World War I. It serves as a poignant reminder of their sacrifice.", "hallenging Location: It's located on the Caraiman Peak in the Bucegi Mountains at an altitude of 2,291 meters (7,516 feet). This makes it a popular destination for hikers and adventurers.", "Almost Became a Communist Symbol: During the communist era, there were plans to remove the cross's arms and replace them with a star, symbolizing socialist victory. Fortunately, these plans were never realized." ]
    },
    {
        id: uuidv4(),
        name:"Sphinx of Bucegi",
        image:"https://pensiuneaedy.ro/img/turism/sfinx_1.jpg",
        interestingFacts: ["Natural Formation: Unlike the Egyptian Sphinx, the Sphinx of Bucegi is a natural rock formation sculpted by wind and erosion over millions of years.","Resemblance to a Human Head: When viewed from a certain angle and in the right light (especially at sunset on November 21st), the rock formation remarkably resembles a human head, giving it its name, the Sphinx.", "Mythological Connections: Some believe the Sphinx is a sacred site with connections to the ancient Dacians, a people who inhabited the region long ago. There are legends suggesting it was a place of worship or even an energy source.","Part of the Babele Complex: The Sphinx is part of the larger Babele rock formation complex on the Bucegi Plateau. This area is known for its unique rock formations, including mushroom-shaped rocks known as  Babele (Old Women)."]
    },
    {
        id: uuidv4(),
        name: "Piata Unirii Bucuresti",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ansamblul_de_f%C3%A2nt%C3%A2ni_din_Pia%C8%9Ba_Unirii%2C_Bucure%C8%99ti.jpg/1024px-Ansamblul_de_f%C3%A2nt%C3%A2ni_din_Pia%C8%9Ba_Unirii%2C_Bucure%C8%99ti.jpg",
        interestingFacts:["Largest Square in Bucharest: Piața Unirii is one of the largest squares in central Bucharest, serving as a major transportation hub and meeting point.", "Historical Significance: The square has a rich history, dating back to the 19th century when it was a bustling commercial center. It was also a focal point during the Romanian Revolution of 1989.", "The fountains at Piața Unirii (Union Square) in Bucharest are a true spectacle, especially on weekend nights from May to October.Multimedia Experience: They are not just fountains; they're a multimedia extravaganza.  Four water screens project colorful images and videos, adding another layer of complexity to the show."]
    },
    {
        id: uuidv4(),
        name: "Bran Castle",
        image: "https://brasovtrip.ro/wp-content/uploads/2023/10/Castelul-Bran-apus-de-soare.webp",
        interestingFacts: [ "Bran Castle, often associated with the legend of Dracula, holds many intriguing secrets and historical facts. ","Not Dracula's Home: While often marketed as Draculas Castle, Bran Castle was never actually home to Vlad the Impaler, the historical inspiration for Bram Stokers Dracula. Vlad may have been imprisoned there briefly, but the connection is tenuous.", "Strategic Location: The castle was built in a strategic location on a cliff overlooking a narrow mountain pass, making it easy to defend. Its purpose was to control the trade route between Transylvania and Wallachia.", "Museum Today:  Bran Castle is now a museum that showcases furniture, art, and weapons collected by Queen Marie. It also highlights the castle's rich history and connection to Romanian folklore."]
    },
    {
        id: uuidv4(),
        name: "Palace of the Parliament",
        image: "https://www.sacyr.com/documents/121856245/121935497/IMG+0+Edificio+pesado.jpg/4889facd-fe77-3339-f08a-d8a7f785a430?t=1684909162607",
        interestingFacts: [
            "Second Largest Administrative Building: The Palace of the Parliament in Bucharest is the second largest administrative building in the world, surpassed only by the Pentagon.",
            "Massive Size: It measures 270 meters by 240 meters, 86 meters high, and 92 meters underground. It has 1,100 rooms and is incredibly heavy, weighing about 4.10 million tons.",
            "Construction: Built during Nicolae Ceaușescu's regime, construction began in 1984. It was intended to be a symbol of power and is a testament to the grandiose ambitions of the communist era.",
            "Usage: Today, the building houses the Romanian Parliament, the National Museum of Contemporary Art, and several conference rooms."
        ]
    },
    {
        id: uuidv4(),
        name: "Peles Castle",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Castelul_Peles%2C_Sinaia_-_Vedere_panoramica.jpg",
        interestingFacts: [
            "Fairytale Appearance: Peles Castle is often described as one of the most beautiful castles in Europe, with a fairy-tale appearance that attracts many visitors.",
            "First Castle Electrified: It was the first European castle to have electricity, central heating, and even a central vacuuming system.",
            "Rich History: Built between 1873 and 1914, it was the summer residence of the Romanian royal family. The castle boasts 160 rooms, each with unique themes and designs.",
            "Museum: Today, Peles Castle functions as a museum, showcasing extensive collections of art, armor, and furniture."
        ]
    },
    {
        id: uuidv4(),
        name: "Corvin Castle",
        image: "https://www.msnews.ro/wp-content/uploads/2023/08/castelul-corvinilor-2.jpg",
        interestingFacts: [
            "Gothic-Renaissance Style: Corvin Castle, also known as Hunyadi Castle, is a stunning example of Gothic-Renaissance architecture.",
            "Historical Significance: It was built in the 15th century by John Hunyadi, a leading military figure in Hungary, and has been a site of many historical events.",
            "Legends: The castle is associated with many legends, including the imprisonment of Vlad the Impaler, which inspired the Dracula stories.",
            "Tourist Attraction: Today, it is one of Romania's most visited landmarks, offering a glimpse into medieval life and architecture."
        ]
    },
    {
        id: uuidv4(),
        name: "Danube Delta",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/218904927.jpg?k=79add50d77ba60279a2b0f4ad10e1cadc07dde44982bf5b18e499132f9601cbc&o=&hp=1",
        interestingFacts: [
            "Biodiversity: The Danube Delta is one of the most biodiverse regions in the world, home to over 5,500 species of flora and fauna.",
            "UNESCO World Heritage Site: It was designated a UNESCO World Heritage site in 1991, recognizing its ecological significance.",
            "Bird Paradise: The delta is a paradise for bird watchers, hosting over 300 species of birds, including pelicans, herons, and egrets.",
            "Natural Beauty: The area is known for its stunning natural beauty, with numerous channels, lakes, and reed beds making it a unique and picturesque landscape."
        ]
    },
    {
        id: uuidv4(),
        name: "Merry Cemetery",
        image: "https://cdn1.matadornetwork.com/blogs/1/2018/08/The-merry-cemetery-of-Sapanta-Maramures-Romania-1200x853.jpg",
        interestingFacts: [
            "Colorful Gravestones: The Merry Cemetery in Săpânța is famous for its brightly colored tombstones, featuring paintings and poetic epitaphs.",
            "Humor in Death: Each tombstone tells the story of the deceased in a humorous and light-hearted manner, a unique approach to death and remembrance.",
            "Cultural Tradition: This tradition was started by local craftsman Stan Ioan Pătraș in the 1930s and continues to this day.",
            "Tourist Attraction: The cemetery has become a popular tourist attraction, drawing visitors with its unique and cheerful perspective on life and death."
        ]
    },
    {
        id: uuidv4(),
        name: "Transfagarasan Highway",
        image: "https://media.istockphoto.com/id/1171011138/de/foto/eine-der-sch%C3%B6nsten-autobahnen-der-welt-transfagarasan-rum%C3%A4nien.jpg?s=612x612&w=0&k=20&c=Mg6VtLRtSGbby62EgWLI35nWkwwxwz_pHq92jHTB_wg=",
        interestingFacts: [
            "Scenic Drive: The Transfagarasan Highway is known as one of the most scenic roads in the world, offering breathtaking views of the Carpathian Mountains.",
            "Engineering Feat: Built between 1970 and 1974, it was a major engineering feat, constructed under the orders of Nicolae Ceaușescu as a strategic military route.",
            "Challenging Road: The highway features numerous hairpin turns, long S-curves, and steep gradients, making it a challenging drive for motorists.",
            "Popular Attraction: It is a popular destination for tourists and car enthusiasts, especially after being featured on the TV show Top Gear."
        ]
    },
    {
        id: uuidv4(),
        name: "Voronet Monastery",
        image: "https://ortodoxcrestin.ro/wp-content/uploads/2024/02/manastirea-voronet-suceava.jpg",
        interestingFacts: [
            "Frescoes: Voronet Monastery is famous for its exterior frescoes, particularly the vivid blue color known as 'Voronet Blue'.",
            "UNESCO Site: The monastery is part of the UNESCO World Heritage list, recognized for its exceptional cultural value.",
            "Historical Monastery: Founded in 1488 by Stephen the Great, it is one of the most important religious sites in Romania.",
            "Biblical Scenes: The frescoes depict a wide range of biblical scenes, including a famous representation of the Last Judgment."
        ]
    },

]

