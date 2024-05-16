## Behind the scenes or working of createRoot() method:
Behind the scenes this createRoot() method actually create it own DOM(Document Object Model) called as Virtual DOM. 

#### Now the question is, what does react do with its own Virtual DOM ?
See, Browsers have their own DOM and in case of React, react creates its own Virtual DOM because all the 
When you make changes to your React components, instead of directly updating the browser's DOM, React first updates its own virtual DOM, which is a lightweight copy of the actual DOM. After updating the virtual DOM, React then compares the changes made to the virtual DOM with the current state of the browser's DOM. React then identifies the minimal set of changes needed to synchronize the two DOMs. Once React has determined the minimal set of changes required, it updates only those parts of the browser's DOM that have changed.

#### Page Reload
In traditional JavaScript, when you make any changes to the browser's DOM, the browser every time creates a new DOM with the specific changes made by you and that's why you see webpage reloads.

## Scenario where you want to avoid unnecessary UI updates (React Fiber Algorithm)
Suppose updates of an HTML element are dependent on the network request and when you update that HTML element it might be possible that you received another value for that element via network request, so you have to update it again. So, to avoid this overhead,  you can wait for some time before refreshing the UI. This pause ensures that you don't rush into updates when more changes might be coming. 

And React Fibre is the algorithm. It's designed to handle situations like the one we have discussed above, where updates may occur rapidly, by prioritizing and scheduling tasks to ensure smooth and responsive UI updates. By leveraging React Fiber, React can effectively manage the rendering process and avoid unnecessary UI updates, providing a better user experience overall.

See, the problem with React is it reacts to changes very quickly or rapidly and that's why it is called React. It updates the UI very fast. React's efficiency in quickly updating the UI is indeed one of its strengths, but it can present challenges when working with animations, especially when precise timing or delays are required.

Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

#### Primary goal of Fiber
1. Pause work and come back to it later.
2. Assign priority to different types of work.
3. Reuse previously completed work.
4. Abort work if it's no longer needed.



## Reconciliation
Reconciliation is an differentiation algorithm that is used by React to differentiate between the two DOM's, the Browser's DOM and React DOM. So, that it can determine which parts in the Browser's DOM need to be changed. Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM".

"In short, The algorithm React uses to diff one tree with another to determine which parts need to be changed."

