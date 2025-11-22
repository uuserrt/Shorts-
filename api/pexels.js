export default async function handler(req,res){
  try{
    const { query, per_page=3 } = req.body;

    const r = await fetch(
      "https://api.pexels.com/videos/search?query="+encodeURIComponent(query)+"&per_page="+per_page,
      { headers:{ Authorization: process.env.GPVnLDWftktgFWS5KWV99kfaLQcI2bcgtiPKmSx2gO1FLgVDVb6378aF } }
    );

    const j = await r.json();
    let clips = j.videos.map(v => v.video_files[0].link);

    res.status(200).json({ clips });

  } catch(err){
    res.status(500).json({error:String(err)});
  }
}
