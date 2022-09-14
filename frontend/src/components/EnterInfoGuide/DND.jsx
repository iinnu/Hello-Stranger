import {
	Avatar,
	Container,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Paper,
} from "@mui/material";

import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ItemsList = () => {
	const itemData = [
		{
			id: 0,
			img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
			title: "Breakfast",
			author: "@bkristastucchio",
		},
		{
			id: 1,
			img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
			title: "Burger",
			author: "@rollelflex_graphy726",
		},
		{
			id: 2,
			img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
			title: "Camera",
			author: "@helloimnik",
		},
		{
			id: 3,
			img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
			title: "Coffee",
			author: "@nolanissac",
		},
		{
			id: 4,
			img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
			title: "Hats",
			author: "@hjrc33",
		},
	];

	const [data, setData] = useState(itemData);
	const handleDragEnd = (result) => {
		if (!result.destination) return;
		const items = Array.from(data);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);
		console.log(items);
		setData(items);
	};
	return (
		<div>
			<Container maxWidth="sm">
				<DragDropContext onDragEnd={handleDragEnd}>
					<Droppable droppableId="list">
						{(provided) => (
							<List
								{...provided.droppableProps}
								ref={provided.innerRef}
								sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
							>
								{data &&
									data.map((item, index) => {
										return (
											<Draggable key={item.id} draggableId={item.id.toString()} index={index}>
												{(provided) => (
													<Paper
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														elevation={2}
														sx={{ marginBottom: "10px" }}
													>
														<ListItem>
															<ListItemAvatar>
																<Avatar src={item.img} />
															</ListItemAvatar>
															<ListItemText primary={item.title} secondary={`Author: ${item.author}`} />
														</ListItem>
													</Paper>
												)}
											</Draggable>
										);
									})}
								{provided.placeholder}
							</List>
						)}
					</Droppable>
				</DragDropContext>
			</Container>
		</div>
	);
};

export default ItemsList;