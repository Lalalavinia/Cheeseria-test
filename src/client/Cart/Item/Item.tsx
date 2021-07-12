import React,{useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../../App';
// Styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () =>{
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  return(
    <Wrapper >
    <div onClick = {handleOpen}>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <h3>${item.price}</h3>
    </div>
    </div>
    <Button
      onClick={() => handleAddToCart(item)}
      data-cy={`add-to-cart-${item.id}`}>Add to cart</Button>
      <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title">
          Details
        </DialogTitle>
        <DialogContent dividers>
          <p><strong>Name:</strong>{item.title}</p>
          <p><strong>Price:</strong>{item.price}</p>
          <p><strong>Description:</strong>{item.description}</p>
          <p><strong>Category:</strong>{item.category}</p>
        </DialogContent>
      </Dialog>
    </div>


  </Wrapper>
  
);

}
  
 

export default Item;
