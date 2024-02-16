import styles from '../../styles/dap.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props: {dap:data}
    }
}

const Ninjas = ({ dap }) => {
    console.log(dap)
  
    return (
      <div>
        <h1>All Leaners</h1>
        {dap.map(dap => (
          <div key={dap.id}>
            <a className={styles.single}>
              <h3>{ dap.name }</h3>
            </a>
          </div>
        ))}
      </div>
    );
  }
 
export default Ninjas;