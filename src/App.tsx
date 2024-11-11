import './App.css';
import Card from './Components/Card';
import meta from './meta.json';
interface FileInfo {
  file: string;
  title: string;
  date: string;
}
interface Data {
  [key: string]: FileInfo;
}
const data: Data = meta;
function App() {
  return (
    <div className='app'>
      {Object.keys(data).map((id: string) => {
        const info: FileInfo = data[id];
        return <Card image={`/photos/${info.file}`} title={info.title} />;
      })}
    </div>
  );
}

export default App;
