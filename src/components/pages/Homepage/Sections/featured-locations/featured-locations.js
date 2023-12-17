import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './featured-locations.css'
import itemData from '../../../../data/CafeResturants.json'
import { Link } from 'react-router-dom'
export default function MasonryImageList() {
  function MouseOver(name) {
    console.log(name)
  }
  function MouseOut() {
    console.log("out")
  }
  return (
    <div className='centered '>
      <Box sx={{ width: '80%', overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={3} gap={20} className='' style={{ padding: 20 }}>
          {itemData.map((item) => (
            <Link to={'/location/' + item.title} state={{ loc: item }} key={item.title + "ahref"}>
              <ImageListItem key={item.title + "Masonry"} className='imageListItem'>
                <img className='darker'
                  srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.image}?w=248&fit=crop&auto=format`}
                  alt={item.name}
                  loading="lazy" onMouseOver={()=>MouseOver(`${item.name}`)} onMouseOut={()=> MouseOut()}
                />
                <div>
                  {item.name}
                </div>
              </ImageListItem>
            </Link>

          ))}
        </ImageList>
      </Box>
    </div>

  );
}