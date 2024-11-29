import express from 'express';
import PrinterController from '../controller/Printer.controller.js';

const router = express.Router();
router.get('/', PrinterController.getAllPrinters); 
router.post('/', PrinterController.addPrinter); 
router.put('/:id', PrinterController.updatePrinter); 
router.delete('/:id', PrinterController.deletePrinter); 
router.patch('/toggle/:id', PrinterController.togglePrinterStatus); 

export default router;