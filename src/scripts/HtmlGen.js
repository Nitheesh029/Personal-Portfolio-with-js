export function generateHtml(Languages){
    let LanguageHtml = '';
    
    Languages.forEach((Language)=>{
      LanguageHtml += `
    <div>
      <div class="flex gap-2">
        <img src="/images/checked.png" alt="" class="w-[30px]">
        <p class="text-lg font-bold font-sans">${Language.title}</p>
      </div>
      <p class="ml-10 text-slate-500">${Language.level}</p>
    </div>
    `;
    });
  return  LanguageHtml;  
  }


  export function projectHtml(projects){
    let projectHTML = "";

    projects.forEach((project) => {
      projectHTML+=`
       <div class="w-[400px] h-[500px] border-black border-2 rounded-xl flex flex-col items-center justify-around">
          <div class="">
              <img src="${project.image}" alt="" class="w-[300px] h-[350px] rounded-xl">
          </div>
          <div class=" text-black text-3xl font-semibold">${project.number}</div>
          <div class=" flex gap-5">
              <a href="${project.liveDemoLink}">
                  <button class="outline-none bg-slate-500 w-[120px] py-3 rounded-2xl text-white font-bold hover:bg-slate-600">Live demo</button>
              </a>
              <a href="${project.githubLink}">
                  <button class="outline-none bg-slate-500 w-[120px] py-3 rounded-2xl text-white font-bold hover:bg-slate-600">Github</button>
              </a>
          </div>
      </div>
      `
    })
    return projectHTML;
  }