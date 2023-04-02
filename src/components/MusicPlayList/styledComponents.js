import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #152850;
  background: cover;
  min-height: 100vh;
  overflow-y: none;
`

export const ArtistBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 250px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 100px;
`

export const ArtistName = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 42px;
  font-weight: bold;
`

export const ArtistInfo = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: 400;
`

export const PlayListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`

export const PlayListHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
`
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 200px;
  border: 1px solid #ffffff;
  border-radius: 6px;
`

export const SearchInput = styled.input`
  height: 30px;
  border: none;
  width: 180px;
  padding-left: 5px;
  color: #cbd5e1;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`

export const MusicList = styled.ul`
  height: 350px;
  width: 90vw;
  overflow-y: auto;
  padding: 0;
`

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoSongsText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
`
