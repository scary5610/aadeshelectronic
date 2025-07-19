import { useState } from 'react';
import { MapPin, Phone, Clock, Send, Info, Mail } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const serviceRequestSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  service: z.string().min(1, 'Please select a service'),
  address: z.string().min(10, 'Address must be at least 10 characters'),
  message: z.string().optional(),
});

type ServiceRequestForm = z.infer<typeof serviceRequestSchema>;

export function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();

  const form = useForm<ServiceRequestForm>({
    resolver: zodResolver(serviceRequestSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      service: '',
      address: '',
      message: '',
    },
  });

  const submitServiceRequest = useMutation({
    mutationFn: async (data: ServiceRequestForm) => {
      const response = await apiRequest('POST', '/api/service-request', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Service Request Submitted",
        description: t('formSuccess'),
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit service request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ServiceRequestForm) => {
    submitServiceRequest.mutate(data);
  };

  const serviceOptions = [
    { value: 'motor-repair', label: t('motorRepairOption') },
    { value: 'fan-repair', label: t('fanRepairOption') },
    { value: 'house-wiring', label: t('houseWiring') },
    { value: 'water-pump', label: t('waterPumpService') },
    { value: 'appliance-repair', label: t('applianceRepair') },
    { value: 'emergency', label: t('emergencyService') },
    { value: 'other', label: t('other') },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-dark mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="font-poppins font-semibold text-2xl mb-6">{t('contactInfo')}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{t('address')}</h4>
                  <p className="text-gray-600 whitespace-pre-line">{t('addressText')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{t('phone')}</h4>
                  <p className="text-gray-600 whitespace-pre-line">{t('phoneText')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-600">{t('emailText')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{t('businessHours')}</h4>
                  <p className="text-gray-600 whitespace-pre-line">{t('hoursText')}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-300 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-4xl text-gray-500 mb-2 mx-auto" />
                <p className="text-gray-600">Google Maps Integration</p>
                <p className="text-sm text-gray-500">Palitana, Gujarat</p>
              </div>
            </div>
          </div>

          {/* Service Request Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="font-poppins font-semibold text-2xl mb-6">{t('requestService')}</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('name')} *</FormLabel>
                      <FormControl>
                        <Input placeholder={t('namePlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('phoneNumber')} *</FormLabel>
                      <FormControl>
                        <Input placeholder={t('phonePlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('email')} ({t('optional')})</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={t('emailPlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('serviceRequired')} *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('selectService')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {serviceOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('addressField')} *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={t('addressPlaceholder')} 
                          rows={3} 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('message')} ({t('optional')})</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={t('messagePlaceholder')} 
                          rows={3} 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full btn-primary"
                  disabled={submitServiceRequest.isPending}
                >
                  {submitServiceRequest.isPending ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {t('sendRequest')}
                    </>
                  )}
                </Button>
              </form>
            </Form>
            
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-700 flex items-start gap-2">
                <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                {t('formInfo')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
