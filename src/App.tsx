import './App.css';
import Card from './Components/Card';
import data from './meta.json';
interface FileInfo {
  file: string;
  title: string;
  date: string;
}
interface Data {
  [key: string]: FileInfo;
}
function App() {
  return (
    <div className='app'>
      {Object.keys(data as Data).map((id: string) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const info: FileInfo = data[id];
        return <Card image={`/photos/${info.file}`} title={info.title} />;
      })}
    </div>
  );
}

export default App;
