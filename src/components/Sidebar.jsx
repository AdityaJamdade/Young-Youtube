import { Stack } from "@mui/material"
import { categories } from "../utils/constants"

const selectedCategory = 'New'

const Sidebar = () => (

    <Stack
        direction="row"
        sx={{
            overflow:"auto",
            height: {sx:'auto', md:'95%'},
            flexDirection: { md:'column' },
        }}
    >
        {categories.map((category) => (
            <button 
                className="category-btn"
                style={{background: category.name === selectedCategory && '#FC1503', color:'white'}}
                key={category.name}
            >
                <span style={{ color: cateory.name === selectedCategory ? 'white' : 'red', marginRight: '15px'}}>{category.name}</span>
                <span>{category.icon}</span>
            </button>
        ))}
    </Stack>
)

export default Sidebar