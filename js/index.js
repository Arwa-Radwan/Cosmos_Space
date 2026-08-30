// WRITE YOUR JS CODE HERE
let todaySection = document.getElementById("today-in-space");
let launchesSection = document.getElementById("launches");
let planetsSection = document.getElementById("planets");
let today = document.querySelector(".today");
let launche = document.querySelector(".launch");
let planets = document.querySelector(".planets");

launchesSection.classList.add("hidden");
planetsSection.classList.add("hidden");
today.addEventListener("click", function(){
    todaySection.classList.remove("hidden");
    launchesSection.classList.add("hidden");
    planetsSection.classList.add("hidden");

    today.classList.add("bg-blue-500/10", "text-blue-400");
    today.classList.remove("text-slate-300");
    launche.classList.remove("bg-blue-500/10", "text-blue-400");
    launche.classList.add("text-slate-300");
    planets.classList.remove("bg-blue-500/10", "text-blue-400");
    planets.classList.add("text-slate-300");
});
launche.addEventListener("click", function(){
    todaySection.classList.add("hidden");
    launchesSection.classList.remove("hidden");
    planetsSection.classList.add("hidden");

    launche.classList.add("bg-blue-500/10", "text-blue-400");
    launche.classList.remove("text-slate-300");
    today.classList.remove("bg-blue-500/10", "text-blue-400");
    today.classList.add("text-slate-300");
    planets.classList.remove("bg-blue-500/10", "text-blue-400");
    planets.classList.add("text-slate-300");
});
planets.addEventListener("click", function(){
    todaySection.classList.add("hidden");
    launchesSection.classList.add("hidden");
    planetsSection.classList.remove("hidden");

    planets.classList.add("bg-blue-500/10", "text-blue-400");
    planets.classList.remove("text-slate-300");
    today.classList.remove("bg-blue-500/10", "text-blue-400");
    today.classList.add("text-slate-300");
    launche.classList.remove("bg-blue-500/10", "text-blue-400");
    launche.classList.add("text-slate-300");
});
async function todayInSpace(){
    document.getElementById("today-in-space").innerHTML = `
    <div class="h-[70vh] flex items-center justify-center">
        <i class="fas fa-spinner fa-spin text-4xl text-blue-400"></i>
    </div>
    `;
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=Tb89xxbiq2t4bOM9cPP97f1uvSIRCQjENoHZflgn`);
    let data = await response.json();
    console.log(data);
    displayTodayPlanets(data)
}
todayInSpace();
function displayTodayPlanets(data){
    let box = `
    <div class="max-w-7xl mx-auto">
    <div
        class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6"
    >
        <div>
    <h2 class="text-xl md:text-2xl font-space font-bold mb-1">
            Today in Space
        </h2>
        <p id="apod-date" class="text-slate-400 text-xs md:text-sm">
            Astronomy Picture of the Day - ${data.date}
        </p>
        </div>
        <div class="flex items-center space-x-2 md:space-x-3">
        <label for="apod-date-input" class="date-input-wrapper">
            <input
            type="date"
            id="apod-date-input"
            class="custom-date-input"
            value="${data.date}"
            max="${new Date().toISOString().split('T')[0]}"
            min="1995-06-16"
            />
            <span class="text-sm">${data.date}</span>
        </label>
        <button
            id="load-date-btn"
            class="px-3 md:px-4 py-2 bg-blue-500 rounded-xl hover:bg-blue-600 transition-colors font-semibold text-sm flex items-center space-x-1 md:space-x-2"
        >
            <i class="fas fa-search"></i>
            <span class="hidden sm:inline">Load</span>
        </button>
        <button
            id="today-apod-btn"
            class="px-3 md:px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 transition-colors font-semibold text-sm"
        >
            Today
        </button>
        </div>
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        <div class="xl:col-span-2">
        <div
            id="apod-image-container"
            class="relative rounded-2xl overflow-hidden group h-[300px] md:h-[400px] lg:h-[600px] bg-slate-800/50 flex items-center justify-center"
        >
            <div id="apod-loading" class="text-center hidden">
            <i
                class="fas fa-spinner fa-spin text-4xl text-blue-400 mb-4"
            ></i>
            <p class="text-slate-400">Loading today's image...</p>
            </div>
            <!-- Using a placeholder image or one from assets if available. Using a reliable external placeholder for now or a relative path if we knew one. Sticking to a colored placeholder div if no image, but let's try a realistic placeholder or just the rocket icon style used elsewhere if we want to be safe. But user wants design. I'll use a relative path assuming assets exist or a generic space placeholder. -->
            <img
            id="apod-image"
            class="w-full h-full object-cover"
            src="${data.url}"
            alt="Astronomy Picture of the Day"
            />
            <div
            class="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            >
            <div class="absolute bottom-6 left-6 right-6">
                <button
                class="w-full py-3 bg-white/10 backdrop-blur-md rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                <i class="fas fa-expand mr-2"></i>View Full Resolution
                </button>
            </div>
            </div>
        </div>
        </div>
        <div class="space-y-4 md:space-y-6">
        <div
            class="bg-slate-800/50 border border-slate-700 rounded-xl md:rounded-2xl p-4 md:p-6"
        >
            <h3
            id="apod-title"
            class="text-lg md:text-2xl font-semibold mb-3 md:mb-4"
            >
            ${data.title}
            </h3>
            <div
            class="flex items-center space-x-4 mb-4 text-sm text-slate-400"
            >
            <span id="apod-date-detail"
                ><i class="far fa-calendar mr-2"></i>${data.date}</span
            >
            </div>
            <p
            id="apod-explanation"
            class="text-slate-300 leading-relaxed mb-4"
            >
            ${data.explanation}
            </p>
            <div
            id="apod-copyright"
            class="text-xs text-slate-400 italic mb-4"
            >
            &copy;Copyright: ${data.copyright|| "NASA"}
            </div>
        </div>
        <div
            class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6"
        >
            <h4 class="font-semibold mb-3 flex items-center">
            <i class="fas fa-info-circle text-blue-400 mr-2"></i>
            Image Details
            </h4>
            <div class="space-y-3 text-sm">
            <div class="flex justify-between">
                <span class="text-slate-400">Date</span>
                <span id="apod-date-info" class="font-medium"
                >${data.date}</span
                >
            </div>
            <div class="flex justify-between">
                <span class="text-slate-400">Media Type</span>
                <span id="apod-media-type" class="font-medium">${data.media_type}</span>
            </div>
            <div class="flex justify-between">
                <span class="text-slate-400">Source</span>
                <span class="font-medium">NASA APOD</span>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    `;

document.getElementById("today-in-space").innerHTML = box;
}
async function launchesPlanets(){
    let response = await fetch(`https://lldev.thespacedevs.com/2.3.0/launches/upcoming/?limit=10`);
    let data =await response.json();
    console.log(data);
    displayLaunches(data)
}
launchesPlanets();
function displayLaunches(data){
let featured =`
<div class="max-w-7xl mx-auto">
<div class="mb-6 md:mb-8">
<h2 class="text-2xl md:text-3xl font-space font-bold mb-2">
    Upcoming Launches
</h2>
<p class="text-slate-400 text-sm md:text-base">
    Real-time tracking of the next missions to space
    </p>
</div>
<div id="featured-launch" class="mb-8">
    <!-- STATIC FEATURED LAUNCH -->
    <div
    class="relative bg-slate-800/30 border border-slate-700 rounded-3xl overflow-hidden group hover:border-blue-500/50 transition-all"
    >
    <div
        class="absolute inset-0 bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
    ></div>
    <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-6 p-8">
        <div class="flex flex-col justify-between">
        <div>
        <div class="flex items-center gap-3 mb-4">
            <span
            class="px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold flex items-center gap-2"
            >
            <i class="fas fa-star"></i>
            Featured Launch
            </span>
            <span
            class="px-4 py-1.5 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold"
            >
            Go
            </span>
        </div>
        <h3 class="text-3xl font-bold mb-3 leading-tight">
            ${data.results[0].name}
        </h3>
        <div
            class="flex flex-col xl:flex-row xl:items-center gap-4 mb-6 text-slate-400"
        >
            <div class="flex items-center gap-2">
            <i class="fas fa-building"></i>
            <span>${data.results[0].launch_service_provider.name}</span>
            </div>
            <div class="flex items-center gap-2">
            <i class="fas fa-rocket"></i>
            <span>${data.results[0].rocket.configuration.name}</span>
            </div>
        </div>
        <div
            class="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-xl mb-6"
        >
            <i class="fas fa-clock text-2xl text-blue-400"></i>
            <div>
            <p class="text-2xl font-bold text-blue-400">2</p>
            <p class="text-xs text-slate-400">Days Until Launch</p>
            </div>
        </div>
        <div class="grid xl:grid-cols-2 gap-4 mb-6">
            <div class="bg-slate-900/50 rounded-xl p-4">
            <p
                class="text-xs text-slate-400 mb-1 flex items-center gap-2"
            >
                <i class="fas fa-calendar"></i>
                Launch Date
            </p>
                <p class="font-semibold">${new Date(data.results[0].net).toLocaleDateString()}</p>
            </div>
            <div class="bg-slate-900/50 rounded-xl p-4">
            <p
                class="text-xs text-slate-400 mb-1 flex items-center gap-2"
            >
                <i class="fas fa-clock"></i>
                Launch Time
            </p>
            <p class="font-semibold">${new Date(data.results[0].net).toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC'})} UTC</p>
            </div>
            <div class="bg-slate-900/50 rounded-xl p-4">
            <p
                class="text-xs text-slate-400 mb-1 flex items-center gap-2"
            >
                <i class="fas fa-map-marker-alt"></i>
                Location
            </p>
            <p class="font-semibold text-sm">${data.results[0].pad.location.name}</p>
            </div>
            <div class="bg-slate-900/50 rounded-xl p-4">
            <p
                class="text-xs text-slate-400 mb-1 flex items-center gap-2"
            >
                <i class="fas fa-globe"></i>
                Country
            </p>
            <p class="font-semibold">${data.results[0].pad.country.name}</p>
            </div>
        </div>
        <p class="text-slate-300 leading-relaxed mb-6">
            ${data.results[0].mission.description}
        </p>
        </div>
        <div class="flex flex-col md:flex-row gap-3">
        <button
            class="flex-1 self-start md:self-center px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition-colors font-semibold flex items-center justify-center gap-2"
        >
            <i class="fas fa-info-circle"></i>
            View Full Details
        </button>
        <div class="icons self-end md:self-center">
            <button
            class="px-4 py-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors"
            >
            <i class="far fa-heart"></i>
            </button>
            <button
            class="px-4 py-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors"
            >
            <i class="fas fa-bell"></i>
            </button>
        </div>
        </div>
    </div>
    <div class="relative">
        <div
        class="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-slate-900/50"
        >
        <!-- Placeholder image/icon since we can't load external images reliably without correct URLs -->
        <div
            class="w-full h-full  bg-slate-800"
        >
        <img src="${data.results[0].image?.image_url || ''}" alt="" class="w-full h-full object-cover">
        </div>
        <div
            class="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent"
        ></div>
        </div>
    </div>
    </div>
</div>
</div>`;

let box = `<div id="launches-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`; 
for(let i = 1; i < data.results.length; i++){
    box += `
    <div class="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group cursor-pointer">
        <div class="relative h-48 bg-slate-900/50 flex items-center justify-center">
        ${data.results[i].image?.thumbnail_url 
            ? `<img src="${data.results[i].image.thumbnail_url}" 
                alt="${data.results[i].name}" 
                class="absolute inset-0 w-full h-full object-cover"
                onerror="this.onerror=null; this.src='images/launch-placeholder.png';">`
            : `<i class="fas fa-space-shuttle text-5xl text-slate-700"></i>`
        }
            <div class="absolute top-3 right-3">
                <span class="px-3 py-1 bg-green-500/90 text-white backdrop-blur-sm rounded-full text-xs font-semibold">
                    ${data.results[i].status.abbrev}
                </span>
            </div>
        </div>
        <div class="p-5">
            <div class="mb-3">
                <h4 class="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                    ${data.results[i].name}
                </h4>
                <p class="text-sm text-slate-400 flex items-center gap-2">
                    <i class="fas fa-building text-xs"></i>
                    ${data.results[i].launch_service_provider.name}
                </p>
            </div>
            <div class="space-y-2 mb-4">
                <div class="flex items-center gap-2 text-sm">
                    <i class="fas fa-calendar text-slate-500 w-4"></i>
                    <span class="text-slate-300">${new Date(data.results[i].net).toLocaleDateString()}</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                    <i class="fas fa-clock text-slate-500 w-4"></i>
                    <span class="text-slate-300">${new Date(data.results[i].net).toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC'})} UTC</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                    <i class="fas fa-rocket text-slate-500 w-4"></i>
                    <span class="text-slate-300">${data.results[i].rocket.configuration.name}</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                    <i class="fas fa-map-marker-alt text-slate-500 w-4"></i>
                    <span class="text-slate-300 line-clamp-1">${data.results[i].pad.location.name}</span>
                </div>
            </div>
            <div class="flex items-center gap-2 pt-4 border-t border-slate-700">
                <button class="flex-1 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-sm font-semibold">
                    Details
                </button>
                <button class="px-3 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                    <i class="far fa-heart"></i>
                </button>
            </div>
        </div>
    </div>
    `
}
    
document.getElementById("launches").innerHTML = featured + box;
}
async function solarSystem(){
    let response = await fetch(`https://solar-system-opendata-proxy.vercel.app/api/planets`);
    let data = await response.json();
    console.log(data);
    displaySolarSystem(data);
}
solarSystem();
function displaySolarSystem(data){
    let box = `
    <div class="mb-4 md:mb-6">
        <h2 class="text-xl md:text-2xl font-space font-bold mb-1">
            Explore Our Solar System
        </h2>
        <p class="text-slate-400 text-xs md:text-sm">
            Discover the planets, moons, and celestial bodies in our cosmic neighborhood
        </p>
    </div>
    <div id="planets-grid" class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-8 gap-3 md:gap-4 mb-8 md:mb-12">`;

for(let i = 0; i< data.bodies.length ; i++){
    box +=`
    <div
            class="planet-card bg-slate-800/50 border border-slate-700 rounded-2xl p-4 transition-all cursor-pointer group"
            data-planet-id="${data.bodies[i].id}"
            style="--planet-color: #eab308"
            onmouseover="this.style.borderColor='#eab30880'"
            onmouseout="this.style.borderColor='#334155'"
            >
            <div class="relative mb-3 h-24 flex items-center justify-center">
                <img
                class="w-20 h-20 object-contain group-hover:scale-110 transition-transform"
                src="${data.bodies[i].image}"
                alt="${data.bodies[i].name}"
                />
            </div>
            <h4 class="font-semibold text-center text-sm">${data.bodies[i].englishName}</h4>
            <p class="text-xs text-slate-400 text-center">${(data.bodies[i].semimajorAxis / 149600000).toFixed(2)} AU</p>
            </div>
    `;
}
box += `</div>`;
earth= ` 
<div class="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
<div
  class="xl:col-span-2 bg-slate-800/50 border border-slate-700 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8"
>
  <div
    class="flex flex-col xl:flex-row xl:items-start space-y-4 xl:space-y-0"
  >
    <div
      class="relative h-48 w-48 md:h-64 md:w-64 shrink-0 mx-auto xl:mr-6"
    >
      <img
        id="planet-detail-image"
        class="w-full h-full object-contain"
        src="images/earth.png"
        alt="earth planet detailed realistic render with clouds and continents"
      />
    </div>
    <div class="flex-1">
      <div class="flex items-center justify-between mb-3 md:mb-4">
        <h3
          id="planet-detail-name"
          class="text-2xl md:text-3xl font-space font-bold"
        >
          Earth
        </h3>
        <button
          class="w-10 h-10 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
        >
          <i class="far fa-heart"></i>
        </button>
      </div>
      <p
        id="planet-detail-description"
        class="text-slate-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base"
      >
        Earth is the third planet from the Sun and the only
        astronomical object known to harbor life. About 29% of
        Earth's surface is land consisting of continents and
        islands. The remaining 71% is covered with water, mostly by
        oceans, seas, gulfs, and other salt-water bodies, but also
        by lakes, rivers, and other fresh water, which together
        constitute the hydrosphere.
      </p>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-2 md:gap-4 mt-4">
    <div class="bg-slate-900/50 rounded-lg p-3 md:p-4">
      <p
        class="text-xs text-slate-400 mb-1 flex items-center gap-1"
      >
        <i class="fas fa-ruler text-xs"></i>
        <span class="text-xs">Semimajor Axis</span>
      </p>
      <p
        id="planet-distance"
        class="text-sm md:text-lg font-semibold"
      >
        149.6M km
      </p>
    </div>
    <div class="bg-slate-900/50 rounded-lg p-4">
      <p
        class="text-xs text-slate-400 mb-1 flex items-center gap-1"
      >
        <i class="fas fa-circle"></i>
        Mean Radius
      </p>
      <p id="planet-radius" class="text-lg font-semibold">
        6,371 km
      </p>
    </div>
    <div class="bg-slate-900/50 rounded-lg p-4">
      <p
        class="text-xs text-slate-400 mb-1 flex items-center gap-1"
      >
        <i class="fas fa-weight"></i>
        Mass
      </p>
      <p id="planet-mass" class="text-lg font-semibold">
        5.97 × 10²⁴ kg
      </p>
    </div>
    <div class="bg-slate-900/50 rounded-lg p-4">
      <p
        class="text-xs text-slate-400 mb-1 flex items-center gap-1"
      >
        <i class="fas fa-compress"></i>
        Density
      </p>
      <p id="planet-density" class="text-lg font-semibold">
        5.51 g/cm³
      </p>
    </div>
    <div class="bg-slate-900/50 rounded-lg p-4">
      <p
        class="text-xs text-slate-400 mb-1 flex items-center gap-1"
      >
        <i class="fas fa-sync-alt"></i>
        Orbital Period
      </p>
      <p id="planet-orbital-period" class="text-lg font-semibold">
        365.25 days
      </p>
    </div>
    <div class="bg-slate-900/50 rounded-lg p-4">
      <p
        class="text-xs text-slate-400 mb-1 flex items-center gap-1"
      >
        <i class="fas fa-redo"></i>
        Rotation Period
      </p>
      <p id="planet-rotation" class="text-lg font-semibold">
        24 hours
      </p>
    </div>
    <div class="bg-slate-900/50 rounded-lg p-4">
      <p
        class="text-xs text-slate-400 mb-1 flex items-center gap-1"
      >
        <i class="fas fa-moon"></i>
        Moons
      </p>
      <p id="planet-moons" class="text-lg font-semibold">1</p>
    </div>
    <div class="bg-slate-900/50 rounded-lg p-4">
      <p
        class="text-xs text-slate-400 mb-1 flex items-center gap-1"
      >
        <i class="fas fa-arrows-alt-v"></i>
        Gravity
      </p>
      <p id="planet-gravity" class="text-lg font-semibold">
        9.8 m/s²
      </p>
    </div>
  </div>
</div>
<div class="space-y-6">
  <div
    class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6"
  >
    <h4 class="font-semibold mb-4 flex items-center">
      <i class="fas fa-user-astronaut text-purple-400 mr-2"></i>
      Discovery Info
    </h4>
    <div class="space-y-3 text-sm">
      <div
        class="flex justify-between items-center py-2 border-b border-slate-700"
      >
        <span class="text-slate-400">Discovered By</span>
        <span
          id="planet-discoverer"
          class="font-semibold text-right"
          >Known since antiquity</span
        >
      </div>
      <div
        class="flex justify-between items-center py-2 border-b border-slate-700"
      >
        <span class="text-slate-400">Discovery Date</span>
        <span id="planet-discovery-date" class="font-semibold"
          >Ancient</span
        >
      </div>
      <div
        class="flex justify-between items-center py-2 border-b border-slate-700"
      >
        <span class="text-slate-400">Body Type</span>
        <span id="planet-body-type" class="font-semibold"
          >Planet</span
        >
      </div>
      <div class="flex justify-between items-center py-2">
        <span class="text-slate-400">Volume</span>
        <span id="planet-volume" class="font-semibold">N/A</span>
      </div>
    </div>
  </div>
  <div
    class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6"
  >
    <h4 class="font-semibold mb-4 flex items-center">
      <i class="fas fa-lightbulb text-yellow-400 mr-2"></i>
      Quick Facts
    </h4>
    <ul id="planet-facts" class="space-y-3 text-sm">
      <li class="flex items-start">
        <i class="fas fa-check text-green-400 mt-1 mr-2"></i>
        <span class="text-slate-300"
          >Only known planet with liquid water</span
        >
      </li>
      <li class="flex items-start">
        <i class="fas fa-check text-green-400 mt-1 mr-2"></i>
        <span class="text-slate-300"
          >Atmosphere contains 78% nitrogen</span
        >
      </li>
      <li class="flex items-start">
        <i class="fas fa-check text-green-400 mt-1 mr-2"></i>
        <span class="text-slate-300"
          >Magnetic field protects from solar wind</span
        >
      </li>
      <li class="flex items-start">
        <i class="fas fa-check text-green-400 mt-1 mr-2"></i>
        <span class="text-slate-300"
          >Formed 4.54 billion years ago</span
        >
      </li>
    </ul>
  </div>
  <div
    class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6"
  >
    <h4 class="font-semibold mb-4 flex items-center">
      <i class="fas fa-satellite text-blue-400 mr-2"></i>
      Orbital Characteristics
    </h4>
    <div class="space-y-3 text-sm">
      <div
        class="flex justify-between items-center py-2 border-b border-slate-700"
      >
        <span class="text-slate-400">Perihelion</span>
        <span id="planet-perihelion" class="font-semibold"
          >147.1M km</span
        >
      </div>
      <div
        class="flex justify-between items-center py-2 border-b border-slate-700"
      >
        <span class="text-slate-400">Aphelion</span>
        <span id="planet-aphelion" class="font-semibold"
          >152.1M km</span
        >
      </div>
      <div
        class="flex justify-between items-center py-2 border-b border-slate-700"
      >
        <span class="text-slate-400">Eccentricity</span>
        <span id="planet-eccentricity" class="font-semibold"
          >0.0167</span
        >
      </div>
      <div
        class="flex justify-between items-center py-2 border-b border-slate-700"
      >
        <span class="text-slate-400">Inclination</span>
        <span id="planet-inclination" class="font-semibold"
          >0.00°</span
        >
      </div>
      <div
        class="flex justify-between items-center py-2 border-b border-slate-700"
      >
        <span class="text-slate-400">Axial Tilt</span>
        <span id="planet-axial-tilt" class="font-semibold"
          >23.44°</span
        >
      </div>
      <div
        class="flex justify-between items-center py-2 border-b border-slate-700"
      >
        <span class="text-slate-400">Avg Temperature</span>
        <span id="planet-temp" class="font-semibold">15°C</span>
      </div>
      <div class="flex justify-between items-center py-2">
        <span class="text-slate-400">Escape Velocity</span>
        <span id="planet-escape" class="font-semibold"
          >11.2 km/s</span
        >
      </div>
    </div>
  </div>
  <button
    class="w-full py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
  >
    <i class="fas fa-book mr-2"></i>Learn More
  </button>
</div>
</div>
`;
let planetColors = {
    "Mercury": "#94a3b8",
    "Venus": "#f97316",
    "Earth": "#3b82f6",
    "Mars": "#ef4444",
    "Jupiter": "#fb923c",
    "Saturn": "#facc15",
    "Uranus": "#06b6d4",
    "Neptune": "#2563eb"
};
let planets = "";
for(let i = 0; i < data.bodies.length; i++){
    let earthMass = 5.972 * Math.pow(10, 24);
let planetMass = data.bodies[i].mass.massValue * Math.pow(10, data.bodies[i].mass.massExponent);
let massRatio = (planetMass / earthMass).toFixed(3);
    planets += `
    <tr class="hover:bg-slate-800/30 transition-colors">
    <td class="px-4 md:px-6 py-3 md:py-4 sticky left-0 bg-slate-800 z-10">
    <div class="flex items-center space-x-2 md:space-x-3">
        <div class="w-6 h-6 md:w-8 md:h-8 rounded-full flex-shrink-0" style="background-color: ${planetColors[data.bodies[i].englishName] || '#94a3b8'}"></div>
        <span class="font-semibold text-sm md:text-base whitespace-nowrap">${data.bodies[i].englishName}</span>
    </div>
</td>
        <td class="px-4 md:px-6 py-3 md:py-4 text-slate-300 text-sm md:text-base whitespace-nowrap">
        ${(data.bodies[i].semimajorAxis / 149600000).toFixed(2)}
        </td>
        <td class="px-4 md:px-6 py-3 md:py-4 text-slate-300 text-sm md:text-base whitespace-nowrap">
        ${(data.bodies[i].meanRadius * 2).toLocaleString()} km
        </td>
        <td class="px-4 md:px-6 py-3 md:py-4 text-slate-300 text-sm md:text-base whitespace-nowrap">
        ${massRatio}
        </td>
        <td class="px-4 md:px-6 py-3 md:py-4 text-slate-300 text-sm md:text-base whitespace-nowrap">
        ${data.bodies[i].sideralOrbit < 365 
            ? Math.round(data.bodies[i].sideralOrbit) + " days" 
            : (data.bodies[i].sideralOrbit / 365.25).toFixed(1) + " years"}
        </td>
        <td class="px-4 md:px-6 py-3 md:py-4 text-slate-300 text-sm md:text-base whitespace-nowrap">
        ${data.bodies[i].moons ? data.bodies[i].moons.length : 0}
        </td>
        <td class="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap">
            <span class="px-2 py-1 rounded text-xs bg-orange-500/50 text-orange-200">${data.bodies[i].type}</span>
        </td>
    </tr>
    `;
}
let planetsTable = `
<div class="mt-8">
    <h2 class="text-xl md:text-2xl font-space font-bold mb-4 md:mb-6">
        Planet Comparison
    </h2>
    <div class="bg-slate-800/50 border border-slate-700 rounded-xl md:rounded-2xl overflow-hidden">
        <div class="overflow-x-auto custom-scrollbar">
            <table class="w-full min-w-[800px]">
                <thead class="bg-slate-900/50">
                    <tr>
                        <th class="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold whitespace-nowrap sticky left-0 bg-slate-900 z-10">
                            Planet
                        </th>
                        <th class="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold whitespace-nowrap">
                            Distance (AU)
                        </th>
                        <th class="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold whitespace-nowrap">
                            Diameter (km)
                        </th>
                        <th class="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold whitespace-nowrap">
                            Mass (Earth=1)
                        </th>
                        <th class="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold whitespace-nowrap">
                            Orbital Period
                        </th>
                        <th class="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold whitespace-nowrap">
                            Moons
                        </th>
                        <th class="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold whitespace-nowrap">
                            Type
                        </th>
                    </tr>
                </thead>
                <tbody id="planet-comparison-tbody" class="divide-y divide-slate-700">
                    ${planets}
                </tbody>
            </table>
        </div>
    </div>
</div>
`;
document.getElementById("planets").innerHTML = box + earth + planetsTable;
// ===============================================================================
let planetCards = document.querySelectorAll(".planet-card");
planetCards.forEach(card => {
    card.addEventListener("click", function(){
        let planetId = this.getAttribute("data-planet-id");
        let selectedPlanet = data.bodies.find(p => p.id === planetId);
        if(selectedPlanet){
            updatePlanetDetails(selectedPlanet);
        }
    });
});

let earthPlanet = data.bodies.find(p => p.englishName === "Earth");
if(earthPlanet){
    updatePlanetDetails(earthPlanet);
}
};
function updatePlanetDetails(planet){
    document.getElementById("planet-detail-name").textContent = planet.englishName;
    document.getElementById("planet-detail-description").textContent = planet.description;
    document.getElementById("planet-detail-image").src = planet.image || "images/" + planet.id + ".png";
    document.getElementById("planet-detail-image").alt = planet.englishName;

    document.getElementById("planet-distance").textContent = (planet.semimajorAxis).toLocaleString() + " km";
    document.getElementById("planet-radius").textContent = planet.meanRadius.toLocaleString() + " km";

    let earthMass = 5.972 * Math.pow(10, 24);
    let planetMass = planet.mass.massValue * Math.pow(10, planet.mass.massExponent);
    document.getElementById("planet-mass").textContent = planetMass.toExponential(2) + " kg";

    document.getElementById("planet-density").textContent = planet.density + " g/cm³";
    document.getElementById("planet-orbital-period").textContent = 
        planet.sideralOrbit < 365 
            ? Math.round(planet.sideralOrbit) + " days" 
            : (planet.sideralOrbit / 365.25).toFixed(2) + " years";
    document.getElementById("planet-rotation").textContent = Math.abs(planet.sideralRotation).toFixed(1) + " hours";
    document.getElementById("planet-moons").textContent = planet.moons ? planet.moons.length : 0;
    document.getElementById("planet-gravity").textContent = planet.gravity + " m/s²";

    document.getElementById("planet-discoverer").textContent = planet.discoveredBy || "Unknown";
    document.getElementById("planet-discovery-date").textContent = planet.discoveryDate || "Unknown";
    document.getElementById("planet-body-type").textContent = planet.bodyType || "Planet";
    document.getElementById("planet-volume").textContent = planet.vol 
        ? planet.vol.volValue + " × 10^" + planet.vol.volExponent + " km³" 
        : "N/A";

    document.getElementById("planet-perihelion").textContent = planet.perihelion.toLocaleString() + " km";
    document.getElementById("planet-aphelion").textContent = planet.aphelion.toLocaleString() + " km";
    document.getElementById("planet-eccentricity").textContent = planet.eccentricity;
    document.getElementById("planet-inclination").textContent = planet.inclination + "°";
    document.getElementById("planet-axial-tilt").textContent = planet.axialTilt + "°";
    document.getElementById("planet-temp").textContent = planet.avgTemp - 273.15 + "°C";
    document.getElementById("planet-escape").textContent = planet.escape + " km/s";
}

