import { useDataGlobal } from '../../model/DataGlobalContext';
const NewPageHeader: React.FC = () => {
  const { dataGlobal, updateDataGlobal } = useDataGlobal();
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("1")
    if (!e.target || !e.target.files || e.target.files.length === 0) {
      return;
    }
    const file = e.target.files[0];
    if (!file) return;
    try {
      const fileContents = await readFileAsync(file);
      const jsonData = JSON.parse(fileContents);
      updateDataGlobal(jsonData);
      console.log(dataGlobal.Overview)
      console.log(dataGlobal)
    } catch (error) {
      console.error('Gagal membaca file JSON:', error);
    }
  };
  const readFileAsync = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          resolve(event.target.result as string);
        } else {
          reject(new Error('Gagal membaca file'));
        }
      };
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  };
 
  return (
    <section>
      <div>
        <input type="file" accept=".json" onChange={handleFileChange} />
      </div>
      <div className="container text-center">
        <div className="rounded-2xl bg-gradient-to-b from-body to-theme-light px-8 py-14 dark:from-darkmode-body dark:to-darkmode-theme-light">
        </div>
      </div>
      
    </section>
  );
};

export default NewPageHeader;
