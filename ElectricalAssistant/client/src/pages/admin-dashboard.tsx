import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { useLocation } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  MessageSquare, 
  Settings, 
  LogOut,
  CheckCircle,
  Clock,
  AlertCircle,
  BarChart3
} from 'lucide-react';
import type { ServiceRequest } from '@shared/schema';

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Check if user is authenticated
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      setLocation('/admin/login');
    }
  }, [setLocation]);

  const { data: serviceRequests, isLoading } = useQuery({
    queryKey: ['/api/admin/service-requests'],
    retry: false,
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: string }) => {
      const response = await apiRequest('PUT', `/api/admin/service-requests/${id}`, { status });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Status Updated",
        description: "Service request status has been updated successfully",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/admin/service-requests'] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update service request status",
        variant: "destructive",
      });
    },
  });

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setLocation('/admin/login');
  };

  const handleStatusChange = (id: number, status: string) => {
    updateStatusMutation.mutate({ id, status });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'in-progress':
        return <AlertCircle className="w-4 h-4" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const stats = serviceRequests ? {
    total: serviceRequests.length,
    pending: serviceRequests.filter((req: ServiceRequest) => req.status === 'pending').length,
    inProgress: serviceRequests.filter((req: ServiceRequest) => req.status === 'in-progress').length,
    completed: serviceRequests.filter((req: ServiceRequest) => req.status === 'completed').length,
  } : { total: 0, pending: 0, inProgress: 0, completed: 0 };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Settings className="text-white w-5 h-5" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Aadesh Electric Store</p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Requests</p>
                  <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
                </div>
                <BarChart3 className="w-8 h-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">In Progress</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.inProgress}</p>
                </div>
                <AlertCircle className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Service Requests */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Service Requests</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {serviceRequests?.map((request: ServiceRequest) => (
                <div key={request.id} className="border rounded-lg p-4 bg-white">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{request.name}</h3>
                        <p className="text-sm text-gray-600">{request.service}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(request.status)}>
                        {getStatusIcon(request.status)}
                        <span className="ml-1 capitalize">{request.status}</span>
                      </Badge>
                      <Select
                        value={request.status}
                        onValueChange={(value) => handleStatusChange(request.id, value)}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="in-progress">In Progress</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{request.phone}</span>
                    </div>
                    {request.email && (
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span>{request.email}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-start space-x-2 text-sm text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span>{request.address}</span>
                  </div>
                  
                  {request.message && (
                    <div className="flex items-start space-x-2 text-sm text-gray-600 mb-3">
                      <MessageSquare className="w-4 h-4 mt-0.5" />
                      <span>{request.message}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    <span>
                      {request.createdAt ? new Date(request.createdAt).toLocaleDateString() : 'N/A'}
                    </span>
                  </div>
                </div>
              ))}
              
              {serviceRequests?.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <Users className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>No service requests yet</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}