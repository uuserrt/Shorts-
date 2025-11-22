export default async function handler(req,res){
  try{
    const { audio, clips, script } = req.body;

    const payload = {
      resolution:"1080x1920",
      background_audio: audio,
      videos: clips.map(c=>({URL:c,seek:0,duration:3})),

      subtitles:{
        language:"auto",
        style:"classic-progressive",
        text_hint: script,
        settings:{
          "font-size":56,
          "font-family":"Roboto",
          "outline-width":6,
          "outline-color":"#00000080",
          "line-color":"#FFFFFF",
          "word-color":"#00FFFF",
          "max-words-per-line":6,
          position:"bottom-center"
        }
      }
    };

    const r = await fetch("https://api.json2video.com/v2/concat",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "x-api-key": process.env.710H2d0DlBRGInGQE62HrZeECkejPKSoFi6DeRIA
      },
      body:JSON.stringify(payload)
    });

    const j = await r.json();
    res.status(200).json(j);

  } catch(err){
    res.status(500).json({error:String(err)});
  }
}
