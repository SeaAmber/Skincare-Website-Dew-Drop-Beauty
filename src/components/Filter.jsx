import PropTypes from "prop-types"

export default function Filters({onFilter}) {

    return (
    <aside className='w-1/4 p-4 bg-white pb-4'>
<h2 className='text-lg font-semibold mb-4'>Filters</h2>
  <button className='block w-full px-4 py-2 my-2 text-white rounded bg-green-700'
  onClick={() => onFilter('Under90')}
  >
    Under $90</button>
  <button className='block w-full px-4 py-2 my-2 text-white rounded bg-red-600'
  onClick={() => onFilter('all')}
  >
    Show all products
    </button>
</aside>
    );
}



Filters.propTypes = {
    onFilter: PropTypes.func.isRequired,
};