import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './featured-locations.css'
import itemData from '../../../../data/CafeResturants.json'
import { Link } from 'react-router-dom'
export default function MasonryImageList() {
  const  MouseOver=(event)=> {
    // console.log(name)
    // console.log(this)
    const triggeringElement = event.target;
    triggeringElement.classList.add('darker')
    // console.log(triggeringElement.nextElementSibling.textContent);
  }
  const  MouseOut=(event)=> {
    // console.log(name)
    // console.log(this)
    const triggeringElement = event.target;
    triggeringElement.classList.remove('darker')
    // console.log(triggeringElement.nextElementSibling.textContent);
  }
  return (
    <div className='centered'>
      <Box sx={{ width: '80%', overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={3} gap={20} className='featured-loc' style={{ padding: 20 }}>
          {itemData.slice(0, 11).map((item) => (
            <Link to={'/location/' + item.title} state={{ loc: item }} key={item.title + "ahref"}>
              <ImageListItem key={item.title + "Masonry"} className='imageListItem'>
                <div className="image-container">
                <img
                  srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.image}?w=248&fit=crop&auto=format`}
                  alt={item.name}
                  loading="lazy" onMouseOver={MouseOver} onMouseOut={MouseOut}
                  className='image'
                />
                <div className="text-overlay">
                  {item.name}
                </div>
                </div>
              </ImageListItem>
            </Link>

          ))}
        </ImageList>
      </Box>
    </div>

  );
}