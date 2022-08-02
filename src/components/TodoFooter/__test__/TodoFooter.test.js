import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from "react-router-dom"

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
    return(
    <BrowserRouter>
    <TodoFooter
        numberOfIncompleteTasks={numberOfIncompleteTasks}
        />
    </BrowserRouter>
    )
}

describe("TodoFooter", () => {


    it('should render the correct amount of incomplete tasks', async() => {
  render(
         <MockTodoFooter
            numberOfIncompleteTasks={5}
        />
    );
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});

it('should render the correct amount of incomplete tasks', async() => {
  render(
         <MockTodoFooter
            numberOfIncompleteTasks={1}
        />
    );
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeInTheDocument()
});
})



// it('should render the correct amount of incomplete tasks', async() => {
//   render(
//          <MockTodoFooter
//             numberOfIncompleteTasks={1}
//         />
//     );
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).not.toBeVisible()
// });

// it('should render the correct amount of incomplete tasks', async() => {
//   render(
//          <MockTodoFooter
//             numberOfIncompleteTasks={5}
//         />
//     );
//   const paragraphElement = screen.getByText(/5 tasks left/i);
//   expect(paragraphElement).toContainHTML("p")
// });

// it('should render the correct amount of incomplete tasks', async() => {
//   render(
//          <MockTodoFooter
//             numberOfIncompleteTasks={1}
//         />
//     );
//   const paragraphElement = screen.getByTestId("para");
//   expect(paragraphElement).toHaveTextContent("1 task left")
// });

// it('should render the correct amount of incomplete tasks', async() => {
//   render(
//          <MockTodoFooter
//             numberOfIncompleteTasks={1}
//         />
//     );
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).not.toBeFalsy()
// });

// it('should render the correct amount of incomplete tasks', async() => {
//   render(
//          <MockTodoFooter
//             numberOfIncompleteTasks={1}
//         />
//     );
//   const paragraphElement = screen.getByTestId("para");
//   expect(paragraphElement.textContent).toBe("1 task left")
//   // 이렇게 할수도 있는데 별로 추천은 안함 
//   expect(paragraphElement.textContent).toBe("1 task left")
//   expect(paragraphElement.textContent).toBe("1 task left")
//   expect(paragraphElement.textContent).toBe("1 task left")
// });
