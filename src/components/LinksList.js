import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const LinksList = ({ links, handleList }) => {
    const handleDraggedList = (result) => {
        if (!result.destination) return;

        const items = Array.from(links);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        handleList(items);
    };

    return (
        <DragDropContext onDragEnd={handleDraggedList}>
            <Droppable droppableId="links">
                {(provided) => (
                    <div
                        className="links"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {links.map(({ id, title }, index) => {
                            return (
                                <Draggable
                                    key={id}
                                    draggableId={id}
                                    index={index}
                                >
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <p>{title}</p>
                                        </div>
                                    )}
                                </Draggable>
                            );
                        })}

                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default LinksList;
