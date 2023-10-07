import { goodsType } from "../../lists/goodsList";
import style from "./Pagination.module.scss"
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setCurrentPage } from "../../redux/slices/goodsSlice";

type PaginationPropsType = {
    laptopsGoods: goodsType[]
}
const Pagination: React.FC<PaginationPropsType> = ({laptopsGoods}) => {
  const dispatch = useDispatch()
  const currentPage = useSelector((state:RootState) => state.goodsSlice.currentPage)

  const handlePageChange = (selectedPage: any) => {
    const itemsPerPage = 20; // Number of items to display per page
    const startIndex = selectedPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    dispatch(setCurrentPage(selectedPage + 1));
  
    // Slice the laptopsGoods array to get the items for the current page
    const itemsToDisplay = laptopsGoods.slice(startIndex, endIndex);
    // Now, you can use the itemsToDisplay array to render the items on the current page.
  };
    return (  
        <ReactPaginate
        className={style.pagination}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) =>  handlePageChange(event.selected + 1)}
        pageRangeDisplayed={20}
        pageCount={Math.ceil(laptopsGoods.length / 20)}
        previousLabel="<"
        renderOnZeroPageCount={null}
        initialPage={currentPage}
      />
    );
}
 
export default Pagination;